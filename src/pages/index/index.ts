import { render } from '../../shared/lib/mvc';
import { NavigationPage } from './NavigationPage';

window.addEventListener('DOMContentLoaded', () => {
	render('#root', new NavigationPage());
});
