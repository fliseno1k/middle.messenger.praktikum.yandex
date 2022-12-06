import type { Props } from '../../shared/lib/mvc';
import { Block } from '../../shared/lib/mvc';
import { Button } from '../../shared/ui';
import { AuthForm } from '../../widgets/AuthForm';

export class NavigationPage extends Block {
	constructor(props?: Props) {
		super({
			...props,
			form: new AuthForm({
				title: 'Навигация по сайту',
				controls: [
					new Button({ text: 'Авторизация', href: '/signin', variant: 'contained', style: 'regular' }),
					new Button({ text: 'Регистрация', href: '/signup', variant: 'contained', style: 'regular' }),
					new Button({ text: 'Профиль', href: '/profile', variant: 'contained', style: 'regular' }),
					new Button({ text: 'Чат', href: '/chat', variant: 'contained', style: 'regular' }),
					new Button({ text: '404', href: '/404', variant: 'contained', style: 'regular' }),
					new Button({ text: '503', href: '/503', variant: 'contained', style: 'regular' }),
				],
			}),
		});
	}

	render() {
		return this.compile(`{{{form}}}`, {
			form: this.props.form,
		});
	}
}
