// types.ts
export interface DeliveryAddress {
  id: string;
  fullName: string;
  phoneNumber: string;
  streetAddress: string;
  city: string;
  zipCode: string;
  label: string;
}

export type PaymentMethod = "mock" | "cod";

export interface OrderData {
  deliveryAddress: DeliveryAddress;
  paymentMethod: PaymentMethod;
}