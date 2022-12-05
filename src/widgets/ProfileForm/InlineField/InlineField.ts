import type { InlineFieldProps } from './types';
import { Block } from '../../../shared/lib/mvc';

import './InlineField.scss';

export class InlineField extends Block {
	constructor(props?: InlineFieldProps) {
		super({ ...props });
	}

	protected componentDidMount(): void {}

	render() {
		return this.compile(
			`
                <div class="profile-field">
                    {{#if editable }}
                        <label for="{{id}}" class="profile-field__label">{{label}}</label>
                        <input 
                            id="{{id}}" 
                            name="{{name}}" 
                            value="{{value}}" 
                            placeholder="{{placeholder}}" 
                            class="profile-field__value">
                        </input>
                    {{^}}
                        <span class="profile-field__label">{{label}}</span>
                        <span class="profile-field__value">{{value}}</span>
                    {{/if}}
                </div>
            `,
			{
				id: this.props.name,
				name: this.props.name,
				value: this.props.value,
				placeholder: this.props.placeholder,
				label: this.props.label,
				editable: this.props.editable,
			}
		);
	}
}
