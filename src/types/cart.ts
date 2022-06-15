export type Cart = {
	id: 'gid://shopify/Cart/2a71165fcd0e77922fa91ab33d4ea8ab';
	createdAt: '2022-06-15T20:07:46Z';
	updatedAt: '2022-06-15T20:07:46Z';
	lines: {
		edges: [
			{
				node: {
					id: 'gid://shopify/CartLine/110b32026b6e64dde9c8476a7368127e?cart=2a71165fcd0e77922fa91ab33d4ea8ab';
					quantity: 2;
					sellingPlanAllocation: {
						priceAdjustments: [{ price: { amount: '14.99' } }];
						sellingPlan: { id: 'gid://shopify/SellingPlan/2961113314'; name: 'Monthly' };
					};
					merchandise: {
						id: 'gid://shopify/ProductVariant/42836240957666';
						title: '12oz';
						priceV2: { amount: '14.99'; currencyCode: 'USD' };
						product: {
							title: 'The Rooster';
							handle: 'the-rooster';
							images: {
								edges: [
									{
										node: {
											url: 'https://cdn.shopify.com/s/files/1/0642/5929/3410/products/coffee_front.webp?v=1652797937';
											altText: null;
										};
									}
								];
							};
						};
					};
				};
			}
		];
	};
	estimatedCost: {
		totalAmount: { amount: '32.56'; currencyCode: 'USD' };
		subtotalAmount: { amount: '29.98'; currencyCode: 'USD' };
		totalTaxAmount: { amount: '2.58'; currencyCode: 'USD' };
		totalDutyAmount: null;
	};
};
