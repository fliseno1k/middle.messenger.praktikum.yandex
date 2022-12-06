export type ValidationScheme = {
	minLength?: number;
	maxLength?: number;
	pattern?: string | RegExp;
	errorMessage?: string;
};

export type FormElement = HTMLFormElement;

export type UserInputElement = HTMLInputElement | HTMLTextAreaElement;

export type ValidationConfig = Partial<Record<string, ValidationScheme>>;

export type FieldValidationResult = {
	error?: string | true;
};
