import type { Props } from '../../lib/mvc';

export type ButtonProps = {
	text?: string;
	href?: string;
	icon?: string;
	style?: 'regular' | 'square';
	variant?: 'contained' | 'text';
	type?: 'button' | 'submit';
} & Props;
