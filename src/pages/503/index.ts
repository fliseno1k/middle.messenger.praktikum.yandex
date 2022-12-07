import { render } from '../../shared/lib/mvc';
import { Button } from '../../shared/ui';
import { ErrorBlock } from '../../widgets/ErrorBlock';

window.addEventListener('DOMContentLoaded', () => {
	render(
		'#root',
		new ErrorBlock({
			errorCode: '503',
			description: 'Что-то сломалось. Не волнуйтусь, мы этим занимаемся',
			button: new Button({
				text: 'На главную',
				href: '/index.html',
				variant: 'contained',
			}),
		})
	);
});
