import { Block } from '../../shared/lib/mvc';

import type { ChatsListProps } from './types';

import './ChatsList.scss';

export class ChatsList extends Block {
	constructor(props: ChatsListProps) {
		super(props);
	}

	protected render(): DocumentFragment {
		return this.compile(
			`
            <div class="chats-list">
                {{{ searchbar }}}
                <ul class="chats-list__list">
                    {{#each chats }}
                        <li class="chats-list__item">
                            {{{ this }}}
                        </li>
                    {{/each}}
                </ul>
            </div>
        `,
			this.props
		);
	}
}
