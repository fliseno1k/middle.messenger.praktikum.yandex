import { render } from '../../shared/lib/mvc';
import { ChatPage } from './ChatPage';

window.addEventListener('DOMContentLoaded', () => {
	render('#root', new ChatPage());
});
