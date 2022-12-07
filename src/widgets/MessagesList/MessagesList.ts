import { Block } from '../../shared/lib/mvc';

import './MessagesList.scss';

import type { MessagesListProps } from './types';

export class MessagesList extends Block {
	constructor(props: MessagesListProps) {
		super(props);
	}

	protected render(): DocumentFragment {
		return this.compile(
			`
            <div class="messages-list">
				<div class="messages-list__overflow">
					<div class="messages-list__list">
						{{#each messages}}
							{{{ this }}}
						{{/each}}
					</div>
				</div>
			</div>
        `,
			this.props
		);
	}
}
