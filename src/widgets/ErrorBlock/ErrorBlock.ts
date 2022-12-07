import { Block } from '../../shared/lib/mvc';

import type { ErrorBlockProps } from './types';

import './ErrorBlock.scss';

export class ErrorBlock extends Block {
	constructor(props: ErrorBlockProps) {
		super(props);
	}

	protected render(): DocumentFragment {
		return this.compile(
			`
        <div class="error">
            <h1 class="error__title">{{ errorCode }}</h1>
            <p class="error__description">{{ description }}</p> 
            {{{ button }}}
        </div>
        `,
			this.props
		);
	}
}
