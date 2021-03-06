declare module '*.scss';

declare module '*.png';

declare enum ORDERTYPE {
	ASK = 1,
	BID = 2
}

declare const enum BALANCETYPE {
	DEPOSIT = 1,
	WITHDRAW = 2
}

declare enum STATUSTYPE {
	PENDING = 1,
	PROCEEDING = 2,
	FINISHED = 3,
	CANCELED = 4
}
