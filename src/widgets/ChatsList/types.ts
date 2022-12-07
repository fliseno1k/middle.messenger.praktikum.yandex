import type { Props } from '../../shared/lib/mvc';
import { Block } from '../../shared/lib/mvc';

export type ChatsListProps = {
	searchbar: Block;
	chats?: Block[];
} & Props;
