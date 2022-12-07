import type { Block, Props } from '../../../../shared/lib/mvc';

export type ChatCardProps = {
	title: string;
	lastMessage?: string;
	lastMessageTime?: string;
	unreadCount?: string | number;
	avatar: Block;
} & Props;
