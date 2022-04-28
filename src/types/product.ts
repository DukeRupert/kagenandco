export type ProductType = {
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
};

export type Edges = {
	node: CartItem;
};
