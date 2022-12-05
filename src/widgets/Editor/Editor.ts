import { Block } from '../../shared/lib/mvc';

import type { EditorProps } from './types';

import './Editor.scss';
import { Button } from '../../shared/ui';
import { PlusIcon } from '../../shared/icons/PlusIcon';
import { PlaneIcon } from '../../shared/icons/PlaneIcon';

const editButton = new Button({
	icon: PlusIcon,
	variant: 'contained',
	style: 'square',
});

const postButton = new Button({
	icon: PlaneIcon,
	variant: 'contained',
	style: 'square',
});

export class Editor extends Block {
	constructor(props: EditorProps) {
		super({
			...props,
			editButton,
			postButton,
		});
	}

	protected render(): DocumentFragment {
		return this.compile(
			`
            <div class="editor">
                <div class="editor__controls-group">
                    {{{ editButton }}}
                </div>
                <span name="message" tagIndex="0" contenteditable="true" class="editor__editable"></span>
                <div class="editor__controls-group">
					{{{ postButton }}}
				</div>
            </div>
        `,
			this.props
		);
	}
}
