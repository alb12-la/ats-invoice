export class InvoiceModel {
  billingContactName: string;
  billingContactPhone: string;
  invoiceNumber: string;
  paymentMethod: string;
  serviceType: string;
  passengerName: string;
  passengerPhone: string;
  numberOfPassengers: number;
  pickupLocation: string;
  pickupDate: string;
  pickupTime: string;
  dropoffLocation: string;
  vehicleType: string;

  constructor(
    billingContactName: string,
    billingContactPhone: string,
    invoiceNumber: string,
    paymentMethod: string,
    serviceType: string,
    passengerName: string,
    passengerPhone: string,
    numberOfPassengers: number,
    pickupLocation: string,
    pickupDate: string,
    pickupTime: string,
    dropoffLocation: string,
  ) {
    this.billingContactName = billingContactName;
    this.billingContactPhone = billingContactPhone;
    this.invoiceNumber = invoiceNumber;
    this.paymentMethod = paymentMethod;
    this.serviceType = serviceType;
    this.passengerName = passengerName;
    this.passengerPhone = passengerPhone;
    this.numberOfPassengers = numberOfPassengers;
    this.pickupLocation = pickupLocation;
    this.pickupDate = pickupDate;
    this.pickupTime = pickupTime;
    this.dropoffLocation = dropoffLocation;
    this.vehicleType = 'SUV'
  }
}
export interface InvoiceContents {
  billingContactName: string;
  billingContactPhone: string;
  invoiceNumber: string;
  paymentMethod: string;
  serviceType: string;
  passengerName: string;
  passengerPhone: string;
  numberOfPassengers: number;
  pickupLocation: string;
  pickupDate: string;
  pickupTime: string;
  dropoffLocation: string;
  billingItems:BillItem[];
  totalCost: number;
}

export interface BillItem {
  description: string,
  cost: number
}
