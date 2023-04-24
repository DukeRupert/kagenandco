// Generated by https://quicktype.io

export interface ProductCardPayload {
	data: Data;
}

export interface Data {
	products: Products;
}

export interface Products {
	edges: ProductsEdge[];
}

export interface ProductsEdge {
	node: PurpleNode;
}

export interface PurpleNode {
	id: string;
	title: string;
	description: string;
	handle: string;
	images: Images;
	priceRange: PriceRange;
}

export interface Images {
	edges: ImagesEdge[];
}

export interface ImagesEdge {
	node: FluffyNode;
}

export interface FluffyNode {
	url: string;
	altText: null;
}

export interface PriceRange {
	minVariantPrice: MinVariantPrice;
}

export interface MinVariantPrice {
	amount: string;
}