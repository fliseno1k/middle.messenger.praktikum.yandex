import { Block } from '../../../shared/lib/mvc';
import { InputProps } from './types';
import './Input.scss';

export class Input extends Block {
	constructor(props: InputProps) {
		super(props);
	}

	render() {
		const props = this.props as InputProps;

		return this.compile(
			`
            <div class="text-input-group {{#if error}} text-input-group--error {{/if}}">
                <input 
                    id="{{id}}"
                    type="{{type}}"
                    name="{{name}}"
                    value="{{value}}"
                    placeholder="{{placeholder}}"
                    class="text-input-group__input"
                />
                <label for="{{id}}" class="text-input-group__label">{{label}}</label>
            </div>
        `,
			{
				id: props.id,
				type: props.id,
				name: props.name,
				placeholder: props.placeholder,
				label: props.label,
				value: props.value,
				error: props.error,
			}
		);
	}
}

