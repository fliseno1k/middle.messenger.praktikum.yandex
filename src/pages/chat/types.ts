import type { Props } from '../../shared/lib/mvc';
import { Block } from '../../shared/lib/mvc';

export type ChatPageProps = {
	sidebarHeader: Block;
	sidebarChatsList: Block;
	mainHeader: Block;
	mainBody: Block;
	mainEditor: Block;
} & Props;
