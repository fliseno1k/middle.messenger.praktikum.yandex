enum METHODS {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	PATCH = 'PATCH',
	DELETE = 'DELETE',
}

type Options = {
	method: METHODS;
	data?: any;
};

type HTTPMethod = (url: string, options: Options) => Promise<unknown>;

function queryStringify(data: object) {
	const str = [];
	for (const p in data) {
		str.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p as keyof typeof data]));
	}

	return '?' + str.join('&');
}

export class HTTPTransport {
	get: HTTPMethod = (url, options) => {
		return this.request(url + queryStringify(options), { ...options, method: METHODS.GET });
	};

	put: HTTPMethod = (url, options) => {
		return this.request(url, { ...options, method: METHODS.PUT });
	};

	patch: HTTPMethod = (url, options) => {
		return this.request(url, { ...options, method: METHODS.PATCH });
	};

	delete: HTTPMethod = (url, options) => {
		return this.request(url, { ...options, method: METHODS.DELETE });
	};

	request: HTTPMethod = (url, options = { method: METHODS.GET }) => {
		const { method, data } = options;

		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open(method, url);

			xhr.onload = function () {
				resolve(xhr);
			};

			xhr.onabort = reject;
			xhr.onerror = reject;
			xhr.ontimeout = reject;

			if (method === METHODS.GET || !data) {
				xhr.send();
			} else {
				xhr.send(data);
			}
		});
	};
}
