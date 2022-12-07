import { Button, Input } from '../../shared/ui';
import { Block, Props } from '../../shared/lib/mvc';
import { AuthForm } from '../../widgets/AuthForm';

const fields = [
	new Input({
		id: 'login',
		name: 'login',
		type: 'text',
		label: 'Логин',
	}),
	new Input({
		id: 'password',
		name: 'password',
		type: 'password',
		label: 'Пароль',
	}),
];

const controls = [
	new Button({
		text: 'Войти',
		type: 'submit',
		variant: 'contained',
		style: 'regular',
	}),
	new Button({
		text: 'Нет аккаунта?',
		href: '/signup',
		variant: 'text',
		style: 'regular',
	}),
];

export class Signin extends Block {
	constructor(props?: Props) {
		super({
			...props,
			form: new AuthForm({
				title: 'Войдите, чтобы продолжить!',
				fields,
				controls,
			}),
		});
	}

	protected componentDidMount(): void {}

	render() {
		return this.compile(`{{{ form }}}`, {
			form: this.props.form,
		});
	}
}
