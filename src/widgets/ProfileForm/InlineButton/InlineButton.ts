import type { InlineButtonProps } from './types';
import { Block } from '../../../shared/lib/mvc';

import './InlineButton.scss';

export class InlineButton extends Block {
	constructor(props?: InlineButtonProps) {
		super({ ...props });
	}

	protected componentDidMount(): void {}

	render() {
		return this.compile(
			`
                <button type="button" class="profile-button profile-button_variant_{{variant}}">
                    <span class="profile-button__label">{{label}}</span>
                </button>
            `,
			{
				label: this.props.label,
				variant: this.props.variant,
			}
		);
	}
}
