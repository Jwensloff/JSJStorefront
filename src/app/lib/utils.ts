import { ProductTypes } from "@/src/types";

export const roundRating = (num: number) => {
  return Math.round(num);
};

export const formatDescription = (product: ProductTypes) => {
  return product?.description.split(/,|\/|\./).filter(Boolean);
};
