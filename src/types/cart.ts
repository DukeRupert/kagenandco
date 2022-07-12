export type Cart =
	| {
			id: string;
			createdAt: string;
			updatedAt: string;
			checkoutUrl: string;
			lines: {
				edges: [
					{
						node: {
							id: string;
							quantity: number;
							sellingPlanAllocation: {
								priceAdjustments: [{ price: { amount: string } }];
								sellingPlan: { id: string; name: string };
							};
							merchandise: {
								id: string;
								title: string;
								priceV2: { amount: string; currencyCode: string };
								quantityAvailable: number;
								product: {
									title: string;
									handle: string;
									images: {
										edges: [
											{
												node: {
													url: string;
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
	  }
	| Record<string, never>;

export type Subtotal = { amount: '29.98'; currencyCode: 'USD' } | Record<string, never>;

export type CartItem = {
	id: string;
	quantity: number;
	merchandise: {
		id: string;
		title: string;
		priceV2: {
			amount: string;
			currencyCode: string;
		};
		quantityAvailable: number;
		product: {
			title: string;
			handle: string;
			images: {
				edges: [
					{
						node: {
							url: string;
							altText: string | null;
						};
					}
				];
			};
		};
	};
	sellingPlanAllocation?: {
		priceAdjustments?: [
			{
				price: {
					amount: string;
				};
			}
		];
		sellingPlan?: {
			id: string;
			name: string;
		};
	};
};

export type Edges =
	| [
			{
				node: CartItem;
			}
	  ];
