import { render } from '../../shared/lib/mvc';
import { Signin } from './Signin';

window.addEventListener('DOMContentLoaded', () => {
	render('#root', new Signin());
});

