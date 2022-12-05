import { Block } from './Block';

export function render(query: string, block: Block) {
	const root = document.querySelector(query);

	if (!root) {
		throw new Error(`Error: root searched by query '${query}' not exists, mounting unable`);
	}

	root.appendChild(block.getContent());
	block.dispatchComponentDidMount();
}

