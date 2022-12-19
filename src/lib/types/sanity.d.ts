export interface SanityPage {
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
	data: Data;
	mainImage?: Logo;
}

export interface Data {
	body: DataBody[];
	description: string;
	mainImage: Logo;
	title: string;
}

export interface DataBody {
	_key: string;
	_type: string;
	body: BodyBody[];
	location: null;
	name: string;
}

export interface BodyBody {
	_key: string;
	_type: string;
	children: Child[];
	markDefs: any[];
	style: string;
}

export interface Child {
	_key: string;
	_type: string;
	marks: any[];
	text: string;
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
	_type: Type;
	background: string;
	foreground: Foreground;
	population: number;
	title: Foreground;
}

export enum Type {
	SanityImagePaletteSwatch = 'sanity.imagePaletteSwatch'
}

export enum Foreground {
	Fff = '#fff',
	The000 = '#000'
}

export interface Order {
	name: string;
	url: string;
}
