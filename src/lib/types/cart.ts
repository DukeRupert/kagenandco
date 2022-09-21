import type { Option } from './product';

export interface EstimatedCost {
	totalAmount: { amount: '32.56'; currencyCode: 'USD' };
	subtotalAmount: { amount: '29.98'; currencyCode: 'USD' };
	totalTaxAmount: { amount: '2.58'; currencyCode: 'USD' };
	totalDutyAmount: null;
}
export interface Product {
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
	product: ProductClass;
}

export interface PriceV2 {
	amount: string;
	currencyCode: string;
}

export interface ProductClass {
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

export interface ProductNode {
	node: Product;
}

export interface Subtotal {
	amount: '29.98';
	currencyCode: 'USD';
}

export interface Cart {
	id: string;
	createdAt?: string;
	updatedAt?: string;
	checkoutUrl: string;
	lines?: Edges;
	options?: [Option];
	estimatedCost?: EstimatedCost;
}

export interface CartItem {
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
}

export type Edges = [ProductNode];

export interface CartUserError {
	code: string;
	field: string;
	message: string;
}

// Api Error response

export interface ErrorLineAdd {
	errors: Error[];
}

export interface Error {
	message: string;
	locations: Location[];
	extensions: Extensions;
}

export interface Extensions {
	value: Value[];
	problems: Problem[];
}

export interface Problem {
	path: Array<number | string>;
	explanation: string;
	message: string;
}

export interface Value {
	merchandiseId: string;
	quantity: number;
	sellingPlanId: string;
}

export interface Location {
	line: number;
	column: number;
}

// CartLinesAddPayload
export interface CartLinesAddPayload {
	data: AddData;
}

export interface AddData {
	cartLinesAdd: CartLinesAdd;
}

export interface CartLinesUpdatePayload {
	data: UpdateData;
}

export interface UpdateData {
	cartLinesUpdate: CartLinesAdd;
}

export interface CartLinesRemovePayload {
	data: RemoveData;
}

export interface RemoveData {
	cartLinesRemove: CartLinesAdd;
}

export interface CartLinesAdd {
	cart: Cart;
	userErrors: any[];
}

// CartLineAdd input
export interface Line {
	attributes?: Attribute[];
	merchandiseId: string;
	quantity: number;
	sellingPlanId?: string;
}

export interface Attribute {
	key: string;
	value: string;
}

// CartLinesUpdate input
export interface LineUpdate {
	attributes?: Attribute[];
	id: string;
	merchandiseId: string;
	quantity: number;
	sellingPlanId: string | null;
}

export interface Attribute {
	key: string;
	value: string;
}
