export type TagName = keyof HTMLElementTagNameMap;

export type DOMEvents = Record<Partial<keyof DocumentEventMap>, (e: Event) => any>;

export type Props = {
	[k: string]: any;
	events?: {
		[key: string]: (e: Event) => void;
	};
};

export type EventType = string;

export type Callback = (...args: any[]) => any;

