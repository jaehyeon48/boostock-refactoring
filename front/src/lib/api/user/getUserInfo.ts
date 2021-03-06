import axios from 'axios';
import { generateConfig, generateURL, isResponseError } from '@lib/api';
import { IUserDataResponse } from '@src/types';

export default async function getUserInfo(): Promise<IUserDataResponse | null> {
	const config = generateConfig({
		url: generateURL('user')
	});

	try {
		const res = await axios(config);
		if (isResponseError(res.status)) throw new Error();

		const { user } = res.data;
		return user;
	} catch (error) {
		return null;
	}
}
