import { RestRequest, PathParams, ResponseComposition, DefaultRequestBody, RestContext } from 'msw';

export default function getBidAndAskOrdersMock(
	req: RestRequest<never, PathParams>,
	res: ResponseComposition<DefaultRequestBody>,
	ctx: RestContext
) {
	return res(
		ctx.json({
			askOrders: [
				{
					price: 39890000,
					amount: 3
				},
				{
					price: 39880000,
					amount: 3
				},
				{
					price: 39850000,
					amount: 5
				},
				{
					price: 39820000,
					amount: 1
				},
				{
					price: 39800000,
					amount: 4
				},
				{
					price: 39670000,
					amount: 3
				},
				{
					price: 39610000,
					amount: 5
				},
				{
					price: 39460000,
					amount: 2
				},
				{
					price: 39340000,
					amount: 5
				},
				{
					price: 39280000,
					amount: 1
				}
			],
			bidOrders: [
				{
					price: 39240000,
					amount: 2
				},
				{
					price: 38970000,
					amount: 5
				},
				{
					price: 38920000,
					amount: 1
				},
				{
					price: 38900000,
					amount: 3
				},
				{
					price: 38830000,
					amount: 1
				},
				{
					price: 38770000,
					amount: 3
				},
				{
					price: 38760000,
					amount: 1
				},
				{
					price: 38750000,
					amount: 3
				},
				{
					price: 38700000,
					amount: 1
				},
				{
					price: 38690000,
					amount: 3
				}
			]
		})
	);
}
