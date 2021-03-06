import CommonError from './CommonError';

export enum UserErrorMessage {
	NOT_EXIST_USER = 'NOT EXIST USER',
	EXIST_USER = 'EXIST USER',
	INVALID_PARAM = 'INVALID PARAM',
	CANNOT_CREATE_USER = 'CANNOT CREATE USER',
}

export default class UserError extends CommonError {
	constructor(message: UserErrorMessage | string) {
		super(message);
		this.name = 'User Error';
		this.status = 400;
	}
}
