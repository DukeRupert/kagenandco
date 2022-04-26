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
