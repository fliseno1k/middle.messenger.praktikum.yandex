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

function queryStringify(data: object) {
	const str = [];
	for (const p in data) {
		if (data.hasOwnProperty(p)) {
			str.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p as keyof typeof data]));
		}
	}
	return '?' + str.join('&');
}

export class HTTPTransport {
	get(url: string, options: Options) {
		return this.request(url + queryStringify(options), { ...options, method: METHODS.GET });
	}

	put(url: string, options: Options) {
		return this.request(url, { ...options, method: METHODS.PUT });
	}

	patch(url: string, options: Options) {
		return this.request(url, { ...options, method: METHODS.PATCH });
	}

	delete(url: string, options: Options) {
		return this.request(url, { ...options, method: METHODS.DELETE });
	}

	request(url: string, options: Options = { method: METHODS.GET }): Promise<XMLHttpRequest> {
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
	}
}
