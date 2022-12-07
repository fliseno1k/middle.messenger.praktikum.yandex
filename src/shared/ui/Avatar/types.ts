import type { Props } from '../../lib/mvc';

export type AvatarProps = {
	image?: string;
	size: 'base' | 'large';
} & Props;
