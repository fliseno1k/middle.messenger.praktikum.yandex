import { Block } from '../../shared/lib/mvc';

import type { Props } from '../../shared/lib/mvc';

import { AuthForm } from '../../widgets/AuthForm';
import { Button, Input } from '../../shared/ui';

const fields = [
	new Input({
		id: 'email',
		name: 'email',
		type: 'text',
		label: 'Почта',
	}),
	new Input({
		id: 'login',
		name: 'login',
		type: 'text',
		label: 'Логин',
	}),
	new Input({
		id: 'first_name',
		name: 'first_name',
		type: 'text',
		label: 'Имя',
	}),
	new Input({
		id: 'last_name',
		name: 'last_name',
		type: 'text',
		label: 'Фамилия',
	}),
	new Input({
		id: 'phone',
		name: 'phone',
		type: 'text',
		label: 'Телефон',
	}),
	new Input({
		id: 'password',
		name: 'password',
		type: 'password',
		label: 'Пароль',
	}),
	new Input({
		id: 'repeat_password',
		name: 'repeat_password',
		type: 'password',
		label: 'Повторите пароль',
	}),
];

const controls = [
	new Button({
		text: 'Зарегестрироваться',
		type: 'submit',
		variant: 'contained',
		style: 'reqular',
	}),
	new Button({
		text: 'Есть аккаунт?',
		href: '/signin',
		variant: 'text',
		style: 'reqular',
	}),
];

export class Signup extends Block {
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

