import { ProductTypes, CareerProps } from "@/src/types";

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

