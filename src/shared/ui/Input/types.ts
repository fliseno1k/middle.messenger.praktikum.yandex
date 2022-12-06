import type { Props } from '../../../shared/lib/mvc';

export type InputProps = {
	id: string;
	name: string;
	type: string;
	label: string;
	value?: string;
	placeholder?: string;
	disabled?: boolean;
	error?: boolean;
} & Props;
