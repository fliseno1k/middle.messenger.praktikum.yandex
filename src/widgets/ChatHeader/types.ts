import type { Block, Props } from '../../shared/lib/mvc';

export type ChatHeaderProps = {
	title: string;
	button: Block;
	avatar: Block;
} & Props;
