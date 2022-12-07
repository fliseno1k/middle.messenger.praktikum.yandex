import { defaultConfig } from './config';
import type { FieldValidationResult, FormElement, UserInputElement, ValidationConfig, ValidationScheme } from './types';

const isFormElement = (element: FormElement | UserInputElement): element is FormElement => {
	return element instanceof HTMLFormElement;
};
export class Validator {
	private validationConfig: ValidationConfig;

	constructor(validationConfig?: ValidationConfig) {
		this.validationConfig = validationConfig || defaultConfig;
	}

	public handleSubmit(
		form: FormElement,
		submitHandler: (data: Object) => void,
		submitErrorHandler: (data: Object) => void
	) {
		const validationResult = this.validate(form);

		if (Object.keys(validationResult).length) {
			submitErrorHandler(validationResult);
		} else {
			const object: { [key: string]: FormDataEntryValue } = {};
			new FormData(form).forEach((value, key) => {
				object[key] = value;
			});

			submitHandler(object);
		}
	}

	public validate(element: FormElement | UserInputElement): Object {
		let formData: FormData;

		if (isFormElement(element)) {
			formData = new FormData(element);
		} else {
			formData = new FormData();
			formData.append(element.name, element.value);
		}

		const validationResult: { [key: string]: string | boolean } = {};

		Array.from(formData.keys()).forEach(field => {
			const result = this.validateSingleField(field, formData.get(field) as string);

			if (result.error) {
				validationResult[field] = result.error;
			}
		});

		return validationResult;
	}

	private validateSingleField(name: string, value: string): FieldValidationResult {
		const fieldValidationScheme = this.validationConfig[name];

		if (!fieldValidationScheme) {
			return {};
		}

		const isValid = [this.checkLength, this.checkPattern]
			.map(func => func(value, fieldValidationScheme))
			.every(v => !!v);

		let validationResult: FieldValidationResult = {};
		if (!isValid) {
			validationResult.error = fieldValidationScheme.errorMessage ?? true;
		}

		return validationResult;
	}

	private checkPattern(value: string, { pattern }: ValidationScheme) {
		if (!pattern) {
			return true;
		}

		return !!value?.match(pattern);
	}

	private checkLength(value: string, { minLength, maxLength }: ValidationScheme) {
		const [min, max] = [minLength ?? 0, maxLength ?? Number.MAX_SAFE_INTEGER];

		return min <= value?.length && value?.length <= max;
	}
}
