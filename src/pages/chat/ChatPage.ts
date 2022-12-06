import { Block } from '../../shared/lib/mvc';
import { ChatPageProps } from './types';
import { ChatHeader } from '../../widgets/ChatHeader';
import { Button } from '../../shared/ui';
import { Avatar } from '../../shared/ui/Avatar';
import { SettingsIcon } from '../../shared/icons/SettingsIcon';
import { OptionsIcon } from '../../shared/icons/OptionsIcon';
import { Searchbar } from '../../shared/ui/Searchbar';
import { ChatCard } from '../../entities/chat/ui/Card';
import { ChatsList } from '../../widgets/ChatsList';
import { Message } from '../../entities/chat/ui/Message';
import { MessagesList } from '../../widgets/MessagesList';
import { Editor } from '../../widgets/Editor';
import { mockMessages } from '../../entities/chat/model';
import './ChatPage.scss';

const profileAvatar = new Avatar({
	size: 'base',
});

const chatAvatar = new Avatar({
	size: 'base',
});

const editProfileButton = new Button({
	icon: SettingsIcon,
	type: 'button',
	variant: 'text',
});

const chatOptionsButton = new Button({
	icon: OptionsIcon,
	type: 'button',
	variant: 'text',
});

const profileHeader = new ChatHeader({
	avatar: profileAvatar,
	button: editProfileButton,
	title: 'Alexey',
});

const chatHeader = new ChatHeader({
	avatar: chatAvatar,
	button: chatOptionsButton,
	title: 'Мандалорец и Грогу',
});

const searchbar = new Searchbar({ placeholder: 'Таков путь' });

const chats = [
	new ChatCard({
		title: 'Ден Абрамов',
		lastMessage: 'Давай к нам в мету! Будем развивать реакт. Не хватает рук на новые фичи!...',
		lastMessageTime: '15:12',
		unreadCount: '6',
		avatar: new Avatar({ size: 'base' }),
	}),
	new ChatCard({
		title: 'Ден Абрамов',
		lastMessage: 'Давай к нам в мету! Будем развивать реакт. Не хватает рук на новые фичи!...',
		lastMessageTime: '15:12',
		unreadCount: '6',
		avatar: new Avatar({ size: 'base' }),
	}),
];

const chatsList = new ChatsList({
	searchbar,
	chats,
});

const messagesList = new MessagesList({ messages: mockMessages.map(message => new Message(message)) });

const editor = new Editor({});

export class ChatPage extends Block {
	constructor(props?: ChatPageProps) {
		super({
			...props,
			sidebarHeader: profileHeader,
			sidebarChatsList: chatsList,
			mainHeader: chatHeader,
			mainBody: messagesList,
			mainEditor: editor,
		});
	}

	render() {
		return this.compile(
			`
				<div class="container">
					<div class="chat-layout">
						<div class="chat-layout__sidebar">
							<div class="chat-layout__slot">
								{{{ sidebarHeader }}}							
							</div>
							<div class="chat-layout__slot chat-layout__slot_grow">
								{{{ sidebarChatsList }}}
							</div>
						</div>
						<div class="chat-layout__main">
							<div class="chat-layout__slot">
								{{{ mainHeader }}}
							</div>
							<div class="chat-layout__slot chat-layout__slot_grow">
								{{{ mainBody }}}
							</div>
							<div class="chat-layout__slot">
								{{{ mainEditor }}}
							</div>
						</div>
					</div>
				</div>
			`,
			this.props
		);
	}
}
