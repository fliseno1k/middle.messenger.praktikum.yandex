import type { ValidationScheme } from './types';

export enum COMMON_FIELD_NAME {
	FIRST_NAME = 'first_name',
	SECOND_NAME = 'second_name',
	DISPLAY_NAME = 'display_name',
	LOGIN = 'login',
	EMAIL = 'email',
	PHONE = 'phone',
	PASSWORD = 'password',
	REPEAT_PASSWORD = 'repeat_password',
	MESSAGE = 'message',
	AVATAR = 'avatar',
}

export const defaultConfig: Partial<Record<COMMON_FIELD_NAME, ValidationScheme>> = {
	login: {
		pattern: /^[A-Za-z0-9]+([A-Za-z0-9]*|[._-]?[A-Za-z0-9]+)*$/,
		minLength: 3,
		maxLength: 20,
		errorMessage:
			'логин долежн иметь длину от 3 до 20 символов, написано латиницей. можете содержать цифры, недопустимы пробелы и спецсимволы (кроме дефиса и нижнего подчеркивания)',
	},
	first_name: {
		pattern: /^[A-z][a-zа-я-]+$/,
		errorMessage:
			'имя должно быть написано латаницей или кирилицей, первая буква должна быть заглавной. недопустимы пробелы и спецсимволы',
	},
	second_name: {
		pattern: /^[A-z][a-zа-я-]+$/,
		errorMessage:
			'фамилия должна быть написана латаницей или кирилицей, первая буква должна быть заглавной. недопустимы пробелы и спецсимволы',
	},
	email: {
		pattern:
			/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
		errorMessage:
			'неверный формат записи почты. должна быть записана латиницей, может включать цифры и спецсимволы, обязательно должна быть "собака" и точка после нее, перед точкой обязательно должны быть буквы',
	},
	password: {
		minLength: 8,
		maxLength: 40,
		pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*[a-zA-Z\d]/,
		errorMessage: 'должен иметь длину от 8 до 40 символов, хотя бы одна заглавная буква и цифра',
	},
	repeat_password: {
		minLength: 8,
		maxLength: 40,
		pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*[a-zA-Z\d]/,
		errorMessage: 'должен совпадать со значением в поле "пароль"',
	},
	phone: {
		pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
		errorMessage: 'от 10 до 15 сиволом, состоит из цифр, может начинаться с плюса',
	},
	message: {
		minLength: 1,
		errorMessage: 'поле не должно быть пустым',
	},
};
