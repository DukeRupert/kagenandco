export interface Option {
	name: 'Size';
	values: ['12oz', '24oz', '80oz', '160oz'];
}

export interface Product {
	id: 'gid://shopify/Product/7698065621218';
	handle: 'the-rooster';
	description: 'For those who are up with the sun and ready to control the day and not let the day control you. yea we got got you!';
	title: 'The Rooster';
	totalInventory: number;
	productType: '';
	variants: {
		edges: [
			{
				node: {
					id: 'gid://shopify/ProductVariant/42836240957666';
					title: '12oz / Whole Bean / Regular';
					selectedOptions: [
						{
							name: 'Size';
							value: '12oz';
						},
						{
							name: 'Texture';
							value: 'Whole Bean';
						},
						{
							name: 'Type';
							value: 'Regular';
						}
					];
					priceV2: {
						amount: '14.99';
						currencyCode: 'USD';
					};
					quantityAvailable: 45;
				};
			},
			{
				node: {
					id: 'gid://shopify/ProductVariant/43107169698018';
					title: '12oz / Whole Bean / Decaf';
					selectedOptions: [
						{
							name: 'Size';
							value: '12oz';
						},
						{
							name: 'Texture';
							value: 'Whole Bean';
						},
						{
							name: 'Type';
							value: 'Decaf';
						}
					];
					priceV2: {
						amount: '14.99';
						currencyCode: 'USD';
					};
					quantityAvailable: 0;
				};
			},
			{
				node: {
					id: 'gid://shopify/ProductVariant/43107169730786';
					title: '12oz / Ground / Regular';
					selectedOptions: [
						{
							name: 'Size';
							value: '12oz';
						},
						{
							name: 'Texture';
							value: 'Ground';
						},
						{
							name: 'Type';
							value: 'Regular';
						}
					];
					priceV2: {
						amount: '14.99';
						currencyCode: 'USD';
					};
					quantityAvailable: 0;
				};
			},
			{
				node: {
					id: 'gid://shopify/ProductVariant/43107169763554';
					title: '12oz / Ground / Decaf';
					selectedOptions: [
						{
							name: 'Size';
							value: '12oz';
						},
						{
							name: 'Texture';
							value: 'Ground';
						},
						{
							name: 'Type';
							value: 'Decaf';
						}
					];
					priceV2: {
						amount: '14.99';
						currencyCode: 'USD';
					};
					quantityAvailable: 0;
				};
			},
			{
				node: {
					id: 'gid://shopify/ProductVariant/42836240990434';
					title: '24oz / Whole Bean / Regular';
					selectedOptions: [
						{
							name: 'Size';
							value: '24oz';
						},
						{
							name: 'Texture';
							value: 'Whole Bean';
						},
						{
							name: 'Type';
							value: 'Regular';
						}
					];
					priceV2: {
						amount: '28.99';
						currencyCode: 'USD';
					};
					quantityAvailable: 50;
				};
			}
		];
	};
	options: [Option];
	priceRange: {
		maxVariantPrice: {
			amount: '140.0';
			currencyCode: 'USD';
		};
		minVariantPrice: {
			amount: '14.99';
			currencyCode: 'USD';
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
					url: 'https://cdn.shopify.com/s/files/1/0642/5929/3410/products/coffee_front.webp?v=1652797937';
					altText: null;
				};
			}
		];
	};
}

export interface Edges {
	node: CartItem;
}

export interface CartItem {
	id: string;
	quantity: number;
	sellingPlanAllocation: SellingPlanAllocation;
	merchandise: Merchandise;
}

export interface Merchandise {
	id: string;
	title: string;
	priceV2: PriceV2;
	quantityAvailable: number;
	product: ProductV2;
}

export interface PriceV2 {
	amount: string;
	currencyCode: string;
}

export interface ProductV2 {
	title: string;
	handle: string;
	images: Images;
}

export interface Images {
	edges: Edge[];
}

export interface Edge {
	node: Node;
}

export interface Node {
	url: string;
	altText: null;
}

export interface SellingPlanAllocation {
	priceAdjustments: PriceAdjustment[];
	sellingPlan: SellingPlan;
}

export interface PriceAdjustment {
	price: Price;
}

export interface Price {
	amount: string;
}

export interface SellingPlan {
	id: string;
	name: string;
}
