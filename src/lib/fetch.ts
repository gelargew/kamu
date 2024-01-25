import { cookies } from 'next/headers';
import { APP_CONFIG } from '../../config/app';

const originalFetch = fetch;
export const Fetch = async (
	input: RequestInfo | URL,
	init?: RequestInit | undefined
) => {
	const token = cookies().get('token');
	const headers = (init?.headers as Record<string, string>) || {};
  headers['Content-Type'] = 'application/json';
	if (token) {
		headers['x-access-token'] = `${token.value}`;
	} else {
		delete headers['x-access-token'];
	}

  const config = {
		headers,
    ...init,
	}

  const resource = APP_CONFIG.API_URL + input;
	const response = await originalFetch(resource, config);

	return response;
};

