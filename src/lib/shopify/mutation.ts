export const cart = `
cart {
    id
    createdAt
    updatedAt
    checkoutUrl
    lines(first: 10) {
    edges {
        node {
        id
        quantity
        sellingPlanAllocation {
            priceAdjustments {
            price {
                amount
            }
            }
            sellingPlan {
            id,
            name
            }
        }
        merchandise {
            ... on ProductVariant {
            id
            title
            priceV2 {
                amount
                currencyCode
            }
            quantityAvailable
            product {
                title
                handle
                images(first: 1) {
                edges {
                    node {
                    url
                    altText
                    }
                }
            }
        }
        }
        }
        }
        }
    }
    estimatedCost {
    totalAmount {
        amount
        currencyCode
    }
    subtotalAmount {
        amount
        currencyCode
    }
    totalTaxAmount {
        amount
        currencyCode
    }
    totalDutyAmount {
        amount
        currencyCode
    }
    }
}`;

export const userErrors = `userErrors {
        field
        message
      }`;
