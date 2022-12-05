import { Block } from '../../../../shared/lib/mvc';

import type { MessageProps } from './types';

import './Message.scss';

export class Message extends Block {
	constructor(props: MessageProps) {
		super(props);
	}

	protected render(): DocumentFragment {
		return this.compile(
			`
            <div class="message message_{{type}}">
                <span class="message__text">{{text}}</span>
            </div>
        `,
			this.props
		);
	}
}
