import axios from 'axios';
import { generateConfig, generateURL, isResponseError } from '@lib/api';

interface IWithdrawData {
	bank: string;
	bankAccount: string;
	changeValue: number;
}

export default async function withdraw(postData: IWithdrawData): Promise<boolean> {
	const config = generateConfig({
		url: generateURL('user/balance/withdraw'),
		method: 'post',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		data: postData
	});

	try {
		const res = await axios(config);
		if (isResponseError(res.status)) throw new Error();

		return true;
	} catch (error) {
		return false;
	}
}
