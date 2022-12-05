import { render } from '../../shared/lib/mvc';
import { Signup } from './Signup';

window.addEventListener('DOMContentLoaded', () => {
	render('#root', new Signup());
});

