import type { Props } from '../../../shared/lib/mvc';

export type InlineFieldProps = {
	id: string;
	name: string;
	label: string;
	value?: string;
	placeholder?: string;
	editable?: boolean;
} & Props;
