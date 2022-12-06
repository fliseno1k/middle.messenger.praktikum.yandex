import type { Props } from '../../shared/lib/mvc';
import { ArrowLeftIcon } from '../../shared/icons/ArrowLeftIcon';
import { EditIcon } from '../../shared/icons/EditIcon';
import { Block } from '../../shared/lib/mvc';
import { Button } from '../../shared/ui';
import { Avatar } from '../../shared/ui/Avatar';

import './ProfileForm.scss';
import { InlineField } from './InlineField';
import { InlineButton } from './InlineButton';

const navigationButton = new Button({
	icon: ArrowLeftIcon,
	style: 'square',
	variant: 'contained',
	type: 'button',
});

const editAvatarButton = new Button({
	icon: EditIcon,
	style: 'square',
	variant: 'contained',
	type: 'button',
});

const avatar = new Avatar({
	size: 'large',
});

const fields = [
	new InlineField({
		editable: false,
		id: 'email',
		name: 'email',
		label: 'Почта',
		value: 'fliseno1k@gmail.com',
	}),
	new InlineField({
		editable: false,
		id: 'login',
		name: 'login',
		label: 'Логин',
		value: 'fliseno1k',
	}),
	new InlineField({
		editable: false,
		id: 'first_name',
		name: 'first_name',
		label: 'Имя',
		value: 'Алексей',
	}),
	new InlineField({
		editable: false,
		id: 'last_name',
		name: 'last_name',
		label: 'Фамилия',
		value: 'Флис',
	}),
	new InlineField({
		editable: false,
		id: 'display_name',
		name: 'display_name',
		label: 'Отображаемое имя',
		value: 'Лёша',
	}),
	new InlineField({
		editable: false,
		id: 'phone',
		name: 'phone',
		label: 'Телефон',
		value: '89244444444',
	}),
];

const buttons = [
	new InlineButton({
		variant: 'primary',
		label: 'Изменить данные',
	}),
	new InlineButton({
		variant: 'primary',
		label: 'Изменить пароль',
	}),
	new InlineButton({
		variant: 'danger',
		label: 'Вернуться в чат',
	}),
];

export class ProfileForm extends Block {
	constructor(props?: Props) {
		super({
			...props,
			avatar,
			fields,
			buttons,
			editAvatarButton,
			navigationButton,
		});
	}

	protected componentDidMount(): void {}

	render() {
		return this.compile(
			`
            <div class="profile">
                <div class="profile__inner">
                    <div class="profile__heading">
                        <div class="profile__navigation">
                            {{{ navigationButton }}}
                        </div>
                        <div class="profile__title">
                            <span>{{ title }}</span>
                        </div>
                    </div>
                    <div class="profile__body">
                        <div class="profile__avatar">
                            <div style="position: relative">
                                {{{ avatar }}}
                                <div class="profile__avatar__option">
                                    {{{ editAvatarButton }}}
                                </div>
                            </div>
                        </div>
                        <div class="profile__fields">
                            {{#if fields }}
                                <div class="profile__fields-group">
                                    {{#each fields}}
                                        {{{ this }}}
                                    {{/each}}
                                </div>
                            {{/if}}
                            {{#if buttons}}
                                <div class="profile__fields-group">   
                                    {{#each buttons}}
                                        {{{ this }}}
                                    {{/each}}
                                </div>
                            {{/if}}
                        </div>
                    </div>
                    <div class="profile__controls"></div>
                </div>
            </div>
        `,
			{
				title: 'Профиль',
			}
		);
	}
}
