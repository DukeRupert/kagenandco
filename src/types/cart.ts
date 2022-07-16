import type { Product, Option } from './product';

export interface EstimatedCost {
	totalAmount: { amount: '32.56'; currencyCode: 'USD' };
	subtotalAmount: { amount: '29.98'; currencyCode: 'USD' };
	totalTaxAmount: { amount: '2.58'; currencyCode: 'USD' };
	totalDutyAmount: null;
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
	createdAt: string;
	updatedAt: string;
	checkoutUrl: string;
	lines: {
		edges: [ProductNode];
	};
	options: [Option];
	estimatedCost: EstimatedCost;
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
