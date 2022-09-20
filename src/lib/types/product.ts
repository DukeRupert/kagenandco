export interface Product {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
	description: string;
	email: string;
	facebook: string;
	instagram: string;
	logo: Logo;
	order: Order[];
	shop: string;
	siteColor: string;
	title: string;
	id: string;
	handle: string;
	totalInventory: number;
	productType: string;
	variants: Variants;
	options: Option[];
	priceRange: PriceRange;
	sellingPlanGroups: SellingPlanGroups;
	images: Images;
}

export interface Images {
	edges: ImagesEdge[];
}

export interface ImagesEdge {
	node: PurpleNode;
}

export interface PurpleNode {
	url: string;
	altText: null;
}

export interface Logo {
	_type: string;
	alt: string;
	asset: Asset;
	caption: string;
}

export interface Asset {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
	assetId: string;
	extension: string;
	metadata: Metadata;
	mimeType: string;
	originalFilename: string;
	path: string;
	sha1hash: string;
	size: number;
	uploadId: string;
	url: string;
}

export interface Metadata {
	_type: string;
	blurHash: string;
	dimensions: Dimensions;
	hasAlpha: boolean;
	isOpaque: boolean;
	lqip: string;
	palette: Palette;
}

export interface Dimensions {
	_type: string;
	aspectRatio: number;
	height: number;
	width: number;
}

export interface Palette {
	_type: string;
	darkMuted: DarkMuted;
	darkVibrant: DarkMuted;
	dominant: DarkMuted;
	lightMuted: DarkMuted;
	lightVibrant: DarkMuted;
	muted: DarkMuted;
	vibrant: DarkMuted;
}

export interface DarkMuted {
	_type: string;
	background: string;
	foreground: string;
	population: number;
	title: string;
}

export interface Option {
	name: Name;
	values: string[];
}

export enum Name {
	Size = 'Size',
	Texture = 'Texture',
	Type = 'Type'
}

export interface Order {
	name: string;
	url: string;
}

export interface PriceRange {
	maxVariantPrice: MaxVariantPrice;
	minVariantPrice: MaxVariantPrice;
}

export interface MaxVariantPrice {
	amount: string;
	currencyCode: CurrencyCode;
}

export enum CurrencyCode {
	Usd = 'USD'
}

export interface SellingPlanGroups {
	edges: SellingPlanGroupsEdge[];
}

export interface SellingPlanGroupsEdge {
	node: FluffyNode;
}

export interface FluffyNode {
	sellingPlans: SellingPlans;
}

export interface SellingPlans {
	edges: SellingPlansEdge[];
}

export interface SellingPlansEdge {
	node: TentacledNode;
}

export interface TentacledNode {
	id: string;
	description: string;
	priceAdjustments: PriceAdjustment[];
}

export interface PriceAdjustment {
	adjustmentValue: AdjustmentValue;
}

export interface AdjustmentValue {
	adjustmentPercentage: number;
}

export interface Variants {
	edges: VariantsEdge[];
}

export interface VariantsEdge {
	node: VariantNode;
}

export interface VariantNode {
	id: string;
	title: string;
	selectedOptions: SelectedOption[];
	priceV2: MaxVariantPrice;
	quantityAvailable: number;
}

export interface SelectedOption {
	name: Name;
	value: string;
}

// export interface Option {
// 	name: 'Size';
// 	values: ['12oz', '24oz', '80oz', '160oz'];
// }

// export interface Product {
// 	id: 'gid://shopify/Product/7698065621218';
// 	handle: 'the-rooster';
// 	description: 'For those who are up with the sun and ready to control the day and not let the day control you. yea we got got you!';
// 	title: 'The Rooster';
// 	totalInventory: number;
// 	productType: '';
// 	variants: {
// 		edges: [
// 			{
// 				node: {
// 					id: 'gid://shopify/ProductVariant/42836240957666';
// 					title: '12oz / Whole Bean / Regular';
// 					selectedOptions: [
// 						{
// 							name: 'Size';
// 							value: '12oz';
// 						},
// 						{
// 							name: 'Texture';
// 							value: 'Whole Bean';
// 						},
// 						{
// 							name: 'Type';
// 							value: 'Regular';
// 						}
// 					];
// 					priceV2: {
// 						amount: '14.99';
// 						currencyCode: 'USD';
// 					};
// 					quantityAvailable: 45;
// 				};
// 			},
// 			{
// 				node: {
// 					id: 'gid://shopify/ProductVariant/43107169698018';
// 					title: '12oz / Whole Bean / Decaf';
// 					selectedOptions: [
// 						{
// 							name: 'Size';
// 							value: '12oz';
// 						},
// 						{
// 							name: 'Texture';
// 							value: 'Whole Bean';
// 						},
// 						{
// 							name: 'Type';
// 							value: 'Decaf';
// 						}
// 					];
// 					priceV2: {
// 						amount: '14.99';
// 						currencyCode: 'USD';
// 					};
// 					quantityAvailable: 0;
// 				};
// 			},
// 			{
// 				node: {
// 					id: 'gid://shopify/ProductVariant/43107169730786';
// 					title: '12oz / Ground / Regular';
// 					selectedOptions: [
// 						{
// 							name: 'Size';
// 							value: '12oz';
// 						},
// 						{
// 							name: 'Texture';
// 							value: 'Ground';
// 						},
// 						{
// 							name: 'Type';
// 							value: 'Regular';
// 						}
// 					];
// 					priceV2: {
// 						amount: '14.99';
// 						currencyCode: 'USD';
// 					};
// 					quantityAvailable: 0;
// 				};
// 			},
// 			{
// 				node: {
// 					id: 'gid://shopify/ProductVariant/43107169763554';
// 					title: '12oz / Ground / Decaf';
// 					selectedOptions: [
// 						{
// 							name: 'Size';
// 							value: '12oz';
// 						},
// 						{
// 							name: 'Texture';
// 							value: 'Ground';
// 						},
// 						{
// 							name: 'Type';
// 							value: 'Decaf';
// 						}
// 					];
// 					priceV2: {
// 						amount: '14.99';
// 						currencyCode: 'USD';
// 					};
// 					quantityAvailable: 0;
// 				};
// 			},
// 			{
// 				node: {
// 					id: 'gid://shopify/ProductVariant/42836240990434';
// 					title: '24oz / Whole Bean / Regular';
// 					selectedOptions: [
// 						{
// 							name: 'Size';
// 							value: '24oz';
// 						},
// 						{
// 							name: 'Texture';
// 							value: 'Whole Bean';
// 						},
// 						{
// 							name: 'Type';
// 							value: 'Regular';
// 						}
// 					];
// 					priceV2: {
// 						amount: '28.99';
// 						currencyCode: 'USD';
// 					};
// 					quantityAvailable: 50;
// 				};
// 			}
// 		];
// 	};
// 	options: [Option];
// 	priceRange: {
// 		maxVariantPrice: {
// 			amount: '140.0';
// 			currencyCode: 'USD';
// 		};
// 		minVariantPrice: {
// 			amount: '14.99';
// 			currencyCode: 'USD';
// 		};
// 	};
// 	sellingPlanGroups: {
// 		edges: [
// 			{
// 				node: {
// 					sellingPlans: {
// 						edges: [
// 							{
// 								node: {
// 									id: string;
// 									description: string;
// 									priceAdjustments: [
// 										{
// 											adjustmentValue: {
// 												adjustmentPercentage: number;
// 											};
// 										}
// 									];
// 								};
// 							}
// 						];
// 					};
// 				};
// 			}
// 		];
// 	};
// 	images: {
// 		edges: [
// 			{
// 				node: {
// 					url: 'https://cdn.shopify.com/s/files/1/0642/5929/3410/products/coffee_front.webp?v=1652797937';
// 					altText: null;
// 				};
// 			}
// 		];
// 	};
// }

// export interface Edges {
// 	node: CartItem;
// }

// export interface CartItem {
// 	id: string;
// 	quantity: number;
// 	sellingPlanAllocation: SellingPlanAllocation;
// 	merchandise: Merchandise;
// }

// export interface Merchandise {
// 	id: string;
// 	title: string;
// 	priceV2: PriceV2;
// 	quantityAvailable: number;
// 	product: ProductV2;
// }

// export interface PriceV2 {
// 	amount: string;
// 	currencyCode: string;
// }

// export interface ProductV2 {
// 	title: string;
// 	handle: string;
// 	images: Images;
// }

// export interface Images {
// 	edges: Edge[];
// }

// export interface Edge {
// 	node: Node;
// }

// export interface Node {
// 	url: string;
// 	altText: null;
// }

// export interface SellingPlanAllocation {
// 	priceAdjustments: PriceAdjustment[];
// 	sellingPlan: SellingPlan;
// }

// export interface PriceAdjustment {
// 	price: Price;
// }

// export interface Price {
// 	amount: string;
// }

// export interface SellingPlan {
// 	id: string;
// 	name: string;
// }
