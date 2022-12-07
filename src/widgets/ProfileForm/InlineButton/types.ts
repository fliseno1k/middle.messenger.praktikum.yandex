import type { Props } from '../../../shared/lib/mvc';

export type InlineButtonProps = {
	variant: 'danger' | 'primary';
	label: string;
} & Props;
