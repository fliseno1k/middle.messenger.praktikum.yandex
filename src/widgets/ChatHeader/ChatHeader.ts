import { Block } from '../../shared/lib/mvc';
import type { ChatHeaderProps } from './types';

import './ChatHeader.scss';

export class ChatHeader extends Block {
	constructor(props: ChatHeaderProps) {
		super(props);
	}

	protected render(): DocumentFragment {
		return this.compile(
			`
            <div class="chat-header">
                <div class="chat-header__content">
                    {{{ avatar }}}
                    <span class="chat-header__title">
                        {{ title }}
                    </span>
                </div>
                <div class="chat-header__control">
                    {{{ button }}}
                </div>
            </div>
        `,
			{
				title: this.props.title,
			}
		);
	}
}
