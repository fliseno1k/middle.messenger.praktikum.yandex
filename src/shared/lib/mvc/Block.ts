import { v4 as uuidv4 } from 'uuid';
import { EventBus } from './EventBus';
import Handlebars from 'handlebars';
import { Props, TagName } from './types';

export abstract class Block {
	protected id: string;
	protected props: Props;
	protected children: Record<string, Block | Block[]>;
	private eventBus: () => EventBus;
	private ref: Element | null = null;

	static LIFECYCLE_EVENTS = {
		INIT: 'init',
		FLOW_CDM: 'flow:component-did-mount',
		FLOW_CDU: 'flow:component-did-update',
		FLOW_RENDER: 'flow:render',
	};

	constructor(props: Props) {
		const eventBus = new EventBus();
		const { children } = this.getChildren(props);

		this.id = uuidv4();
		this.children = children;
		this.eventBus = () => eventBus;
		this.props = this.makePropsProxy({ ...props, __id: this.id });

		this.registerLifecycleEvents(eventBus);

		eventBus.emit(Block.LIFECYCLE_EVENTS.INIT);
	}

	private init() {
		this.eventBus().emit(Block.LIFECYCLE_EVENTS.FLOW_RENDER);
	}

	protected componentDidMount() {}

	public dispatchComponentDidMount() {
		this.eventBus().emit(Block.LIFECYCLE_EVENTS.FLOW_CDM);

		Object.values(this.children).forEach(child => {
			if (Array.isArray(child)) {
				child.forEach(subChild => subChild.dispatchComponentDidMount());
			} else {
				child.dispatchComponentDidMount();
			}
		});
	}

	protected componentDidUpdate(oldProps: Props, newProps: Props) {
		return true;
	}

	private internalComponentDidUpdate(oldProps: Props, newProps: Props) {
		const response = this.componentDidUpdate(oldProps, newProps);

		if (!response) {
			return;
		}

		this.eventBus().emit(Block.LIFECYCLE_EVENTS.FLOW_RENDER);
	}

	private registerLifecycleEvents(eventBus: EventBus) {
		eventBus.on(Block.LIFECYCLE_EVENTS.INIT, this.init.bind(this));
		eventBus.on(Block.LIFECYCLE_EVENTS.FLOW_CDM, this.componentDidMount.bind(this));
		eventBus.on(Block.LIFECYCLE_EVENTS.FLOW_CDU, this.internalComponentDidUpdate.bind(this));
		eventBus.on(Block.LIFECYCLE_EVENTS.FLOW_RENDER, this.prepareContent.bind(this));
	}

	private registerDOMEvents() {
		if (!this.ref) {
			return;
		}

		const { events = {} } = this.props;
		Object.keys(events).forEach(eventName => {
			(this.ref as Element).addEventListener(eventName, events[eventName]);
		});
	}

	private unregisterDOMEvents() {
		if (!this.ref) {
			return;
		}

		const { events = {} } = this.props;
		Object.keys(events).forEach(eventName => {
			(this.ref as Element).removeEventListener(eventName, events[eventName]);
		});
	}

	private getChildren(propsAndChildren: Props) {
		const props: Props = {};
		const children: Record<string, Block | Block[]> = {};

		Object.entries(propsAndChildren).forEach(([key, value]) => {
			if (value instanceof Block || value instanceof Array<Block>) {
				children[key] = value;
			} else {
				props[key] = value;
			}
		});

		return { children, props };
	}

	public getContent() {
		return this.ref as Element;
	}

	public compile(template: string, props: Props) {
		const propsAndStubs = { ...props };

		Object.entries(this.children).forEach(([key, child]) => {
			if (Array.isArray(child)) {
				const arr = child.map(subChild => `<div data-id="${subChild.id}"></div>`);
				propsAndStubs[key] = arr;
			} else {
				propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
			}
		});

		const fragment = this.createDocumentElement('template') as HTMLTemplateElement;
		fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

		Object.values(this.children).forEach(child => {
			const stubReplacement = (child: Block) => {
				const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);
				stub?.replaceWith(child.getContent());
			};

			if (Array.isArray(child)) {
				child.forEach(subChild => stubReplacement(subChild));
			} else {
				stubReplacement(child);
			}
		});

		return fragment.content;
	}

	private prepareContent() {
		const fragment = this.render();

		this.unregisterDOMEvents();

		if (!this.ref || !this.ref.parentElement) {
			this.ref = fragment.firstElementChild;
		} else {
			const prevRef = this.ref;
			this.ref = fragment.firstElementChild;

			prevRef.replaceWith(this.ref as Element);
		}

		this.registerDOMEvents();
	}

	public setProps(nextProps: Props) {
		if (!nextProps) {
			return;
		}

		Object.assign(this.props, nextProps);
	}

	private makePropsProxy(props: object) {
		const dispatchComponentDidUpdate = (oldProps: Props, nextProps: Props) => {
			this.eventBus().emit(Block.LIFECYCLE_EVENTS.FLOW_CDU, oldProps, nextProps);
		};

		return new Proxy(props, {
			get(target: typeof props, prop: keyof typeof props) {
				const value: any = target[prop];
				return typeof value === 'function' ? value.bind(target) : value;
			},
			set(target: typeof props, prop: keyof typeof props, value) {
				const oldTarget = { ...target };
				(target[prop] as any) = value;

				dispatchComponentDidUpdate(oldTarget, target);

				return true;
			},
			deleteProperty(target, prop) {
				throw new Error('Operation not allowed');
			},
		});
	}

	private createDocumentElement(tagName: TagName) {
		const element = document.createElement(tagName);
		element.setAttribute('data-id', this.id);

		return element;
	}

	protected abstract render(): DocumentFragment;
}

