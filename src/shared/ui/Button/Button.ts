import { Block } from '../../../shared/lib/mvc';

import type { ButtonProps } from './types';

import './Button.scss';

export class Button extends Block {
	constructor(props: ButtonProps) {
		super(props);
	}

	render() {
		const props = this.props as ButtonProps;

		const commonProps = {
			icon: props.icon,
			href: props.href,
			text: props.text,
			variant: props.variant,
			style: props.style,
			type: props.type,
		};

		if (props.href) {
			return this.compile(
				`
                    <a href="{{href}}" class="brand-button brand-button_variant_{{variant}} brand-button_style_{{style}}">
                        {{#if text}}
                            <span class="brand-button__text">{{text}}</span>
                        {{/if}}
                    </a>
                `,
				commonProps
			);
		} else {
			return this.compile(
				`
                    <button type="{{type}}" class="brand-button brand-button_variant_{{variant}} brand-button_style_{{style}}">
                        {{#if icon}}
                            {{{icon}}}
                        {{/if}}
                        {{#if text}}
                            <span class="brand-button__text">{{text}}</span>
                        {{/if}}
                    </button>
                `,
				commonProps
			);
		}
	}
}
