export type Product = {
	id: string;
	handle: string;
	description: string;
	title: string;
	totalInventory: number;
	productType: string;
	variants: {
		edges: [
			{
				node: {
					id: string;
					title: string;
					price: string;
					quantityAvailable: number;
				};
			}
		];
	};
	priceRange: {
		maxVariantPrice: {
			amount: string;
			currencyCode: string;
		};
		minVariantPrice: {
			amount: string;
			currencyCode: string;
		};
	};
	sellingPlanGroups: {
		edges: [
			{
				node: {
					sellingPlans: {
						edges: [
							{
								node: {
									id: string;
									description: string;
									priceAdjustments: [
										{
											adjustmentValue: {
												adjustmentPercentage: number;
											};
										}
									];
								};
							}
						];
					};
				};
			}
		];
	};
	images: {
		edges: [
			{
				node: {
					url: string;
					altText?: string | null;
				};
			}
		];
	};
};

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
		priceAdjustments: [
			{
				price: {
					amount: string;
				};
			}
		];
		sellingPlan: {
			id: string;
			name: string;
		};
	};
};

export type Edges = {
	node: CartItem;
};
