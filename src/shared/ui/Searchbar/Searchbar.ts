import { SearchIcon } from '../../icons/SearchIcon';
import { Block } from '../../lib/mvc';

import type { SearchbarProps } from './types';

import './Searchbar.scss';

export class Searchbar extends Block {
	constructor(props: SearchbarProps) {
		super(props);
	}

	protected render(): DocumentFragment {
		return this.compile(
			`
            <div class="searchbar">
                <form class="searchbar__form">
                    <button type="submit">
						{{{ icon }}}
                    </button>
                    <input type="text" {{#if placeholder}} placeholder="{{ placeholder }} {{/if}}" />
                </form>
            </div>
        `,
			{
				...this.props,
				icon: SearchIcon,
			}
		);
	}
}
