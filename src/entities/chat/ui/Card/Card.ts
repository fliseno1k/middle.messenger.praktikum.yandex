import { Block } from '../../../../shared/lib/mvc';

import type { ChatCardProps } from './types';

import './Card.scss';

export class ChatCard extends Block {
	constructor(props: ChatCardProps) {
		super(props);
	}

	protected render(): DocumentFragment {
		return this.compile(
			`
            <div class="chat-card">
                {{{ avatar }}}
                <div class="chat-card__content">
                    <div class="chat-card__top-line">
                        <span class="chat-card__name">{{ title }}</span>
                        <span class="chat-card__date">{{ lastMessageTime }}</span>
                    </div>
                    <div class="chat-card__bottom-line">
                        <span class="chat-card__message">{{ lastMessage }}</span>
                        {{#if unreadCount }}
                            <div class="chat-card__unread">
                                <span>{{ unreadCount }}</span>
                            </div>
                        {{/if}}
                    </div>
                </div>
            </div>
        `,
			this.props
		);
	}
}
