import { EventType, Callback } from './types';

export class EventBus {
	private listeners: Record<EventType, Set<Callback>>;

	constructor() {
		this.listeners = {};
	}

	on(event: EventType, callback: Callback) {
		if (!this.listeners[event]) {
			this.listeners[event] = new Set();
		}

		this.listeners[event].add(callback);
	}

	off(event: EventType, callback: Callback) {
		if (!this.listeners[event]) {
			throw new Error(`No events of type ${event}`);
		}

		if (this.listeners[event].size === 1) {
			delete this.listeners[event];
			return;
		}

		this.listeners[event].delete(callback);
	}

	emit(event: EventType, ...args: any[]) {
		if (!this.listeners[event]) {
			throw new Error(`No events of type ${event}`);
		}

		this.listeners[event].forEach(listener => listener(...args));
	}
}

