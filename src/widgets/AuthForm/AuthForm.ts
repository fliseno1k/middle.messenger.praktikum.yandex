import type { AuthFormProps } from './types';
import { Block } from '../../shared/lib/mvc';
import { Validator } from '../../features/form/validator';
import './AuthForm.scss';

const validator = new Validator();

export class AuthForm extends Block {
	constructor(props: AuthFormProps) {
		super({
			...props,
			validator,
		});
	}

	protected componentDidMount(): void {
		const validator = this.props.validator;

		function focusoutHandler(this: Block, e: Event) {
			const validationResult = validator.validate(e.target);
			const keys = Object.keys(validationResult);

			this.setProps({
				value: (e.target as HTMLInputElement).value,
				error: keys.length ? validationResult[keys[0]] : false,
			});
		}

		((this.children.fields as Block[]) || []).forEach(field => {
			field.setProps({
				events: {
					focusout: focusoutHandler.bind(field),
				},
			});
		});

		const submitHandler = (data: Object) => {
			console.log(data);
		};
		const submitErrorHandler = (error: Object) => {
			console.log(error);
		};

		this.setProps({
			events: {
				submit: e => {
					e.preventDefault();

					setTimeout(() => {
						validator.handleSubmit(e.target, submitHandler, submitErrorHandler);
					});
				},
			},
		});
	}

	render() {
		return this.compile(
			`
            <form class="auth-form">
                <div class="auth-form__inner">
                    <h3 class="auth-form__title">
                        {{ title }}
                    </h3>
                    <div class="auth-form__form">
                        {{#if fields}}
                            <div class="auth-form__fields">
                                {{#each fields}}
                                    {{{ this }}}
                                {{/each}}
                            </div>
                        {{/if}}
                        {{#if controls}}
                            <div class="auth-form__controls">
                                {{#each controls}}
                                    {{{ this }}}
                                {{/each}}
                            </div>
                        {{/if}}                            
                    </div>
                </div>
            </form>
        `,
			{
				title: this.props.title,
				fields: this.props.fields,
				controls: this.props.controls,
			}
		);
	}
}
