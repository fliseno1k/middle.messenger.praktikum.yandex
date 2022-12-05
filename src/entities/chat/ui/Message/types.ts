import type { Props } from '../../../../shared/lib/mvc';

export type MessageProps = {
	text: string;
	time: string;
	type: 'recieved' | 'shipped';
} & Props;
