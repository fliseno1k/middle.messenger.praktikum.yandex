import { Block } from '../../shared/lib/mvc';

import type { Props } from '../../shared/lib/mvc';

export type AuthFormProps = {
	fields?: Block[];
	controls?: Block[];
	title: string;
} & Props;

