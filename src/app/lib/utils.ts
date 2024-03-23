import { ProductTypes, CareerProps, ShoppingCartProps } from "@/src/types";

// Single Product Page Utilities
export const roundRating = (num: number) => {
  return Math.round(num);
};

export const formatProductDescription = (product: ProductTypes) => {
  return product?.description.split(/,|\/|\./).filter(Boolean);
};

// Single Job Page Utilities
export const formatJobQualifications = (jobListing: CareerProps) => {
  return jobListing?.qualifications.split(/\//).filter(Boolean);
};

export const formatJobResponsibilites = (jobListing: CareerProps) => {
  return jobListing?.responsibilities.split(/\//).filter(Boolean);
};

export const formatJobBenefits = (jobListing: CareerProps) => {
  return jobListing?.benefits.split(/,/).filter(Boolean);
};

// Sale Items
export const filterSaleItems = (products: ProductTypes[]) => {
  return products?.filter((product) => {
    if (product.price <= 20) {
      return product;
    }
  });
};

// Searched Products
export const searchProducts = (
  products: ProductTypes[],
  params: { search: string },
) => {
  return products?.filter((product) => {
    return (
      params.search &&
      (product.title || product.description || product.category)
        .toLowerCase()
        .includes(params.search.toLowerCase())
    );
  });
};

// Top-Rated
export const filterHighestRated = (products: ProductTypes[]) => {
  return products?.filter(
    (product: { rate: { rating: number }; category: string }) => {
      if (product.rate.rating >= 4) {
        return product;
      }
    },
  );
};

// Order Summary
export const generateSubTotal = (shoppingCartItems: ShoppingCartProps[]) => {
  return shoppingCartItems?.reduce(
    (total, product) => (total += product.price * product.quantity),
    0,
  );
};

export const generateTotal = (subTotal: number, shippingOption: any) => {
  return (shippingOption.price + subTotal + subTotal * 0.09).toFixed(2);
};

// Cart Main
export const generateTotalItems = (shoppingCartItems: ShoppingCartProps[]) => {
  return shoppingCartItems?.reduce(
    (acc: number, product: ShoppingCartProps) => {
      return acc + product.quantity;
    },
    0,
  );
};
