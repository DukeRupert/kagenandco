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

export const product = `
    id
    handle
    description
    title
    totalInventory
    productType
    variants(first: 15) {
      edges {
        node {
          id
          title
          selectedOptions {
            name,
            value
          }
          priceV2 {
            amount
            currencyCode
          }
          quantityAvailable
        }
      }
    }
    options {
      name,
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    sellingPlanGroups(first: 5) {
      edges {
        node {
          sellingPlans(first: 5) {
            edges {
              node {
                id
                description
                priceAdjustments {
                  adjustmentValue {
                    ...on SellingPlanPercentagePriceAdjustment {
                      adjustmentPercentage
                    }
                  }
                }
                
              }
            }
          }
        }
      }
    }
    images(first: 4) {
      edges {
        node {
          url
          altText
        }
      }
    }`;
