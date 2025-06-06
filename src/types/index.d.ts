export interface DeliveryAddress {
  id: string;
  fullName: string;
  phoneNumber: string;
  streetAddress: string;
  city: string;
  zipCode: string;
  label?: string; // e.g., "Home", "Office", "Other"
}