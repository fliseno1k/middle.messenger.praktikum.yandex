import { Block } from '../../shared/lib/mvc';
import type { Props } from '../../shared/lib/mvc';
import { ProfileForm } from '../../widgets/ProfileForm';

const profileForm = new ProfileForm({});

export class Profile extends Block {
	constructor(props?: Props) {
		super({ ...props, profileForm });
	}

	protected componentDidMount(): void {}

	render() {
		return this.compile(`{{{ profileForm }}}`, {
			profileForm: this.props.profileForm,
		});
	}
}

