import type { Block, Props } from '../../shared/lib/mvc';

export type ErrorBlockProps = {
	errorCode: number | string;
	description: string;
	button: Block;
} & Props;
