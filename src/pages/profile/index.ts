import { Profile } from './Profile';
import { render } from '../../shared/lib/mvc/render';

window.addEventListener('DOMContentLoaded', () => {
	render('#root', new Profile());
});
