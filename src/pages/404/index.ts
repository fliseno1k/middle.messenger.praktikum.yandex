import { render } from '../../shared/lib/mvc';
import { Button } from '../../shared/ui';
import { ErrorBlock } from '../../widgets/ErrorBlock';

window.addEventListener('DOMContentLoaded', () => {
	render(
		'#root',
		new ErrorBlock({
			errorCode: '404',
			description: 'Странно, но здесь ничего нет',
			button: new Button({
				text: 'На главную',
				href: '/index.html',
				variant: 'contained',
			}),
		})
	);
});
