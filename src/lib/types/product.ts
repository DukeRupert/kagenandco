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
