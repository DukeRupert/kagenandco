export function price(itemPrice: number) {
	const amount = Number(itemPrice).toFixed(2);
	return '$' + amount;
}
