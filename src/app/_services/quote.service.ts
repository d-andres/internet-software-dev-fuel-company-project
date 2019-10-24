import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  clientId: any;
  gallonsRequested: number;
  requestDate: Date;
  deliveryDate: Date;
  deliveryAddress: string;
  deliveryCity: string
  deliveryState: string;
  deliveryZipCode: string;
  deliveryContactName: string;
  deliveryContactPhone: string;
  deliveryContactEmail: string;
  suggestedPrice: number;
  totalAmountDue: number;

  constructor() {
    this.requestDate = new Date();
    this.deliveryDate = new Date();
  }

  getId() { return this.clientId; }
  setId(s: string) { this.clientId = s; }

  getGallons() { return this.gallonsRequested; }
  setGallons(n: number) { this.gallonsRequested = n; }

  getDDate() { return this.deliveryDate; }
  setDDate(d: Date) { this.deliveryDate = d; }

  getRDate() { return this.requestDate; }
  setRDate(d: Date) { this.requestDate = d; }

  getDAddress() { return this.deliveryAddress; }
  setDAddress(s: string) { this.deliveryAddress = s; }

  getDCity() { return this.deliveryCity; }
  setDCity(s: string) { this.deliveryCity = s; }

  getDState() { return this.deliveryState; }
  setDState(s: string) { this.deliveryState = s; }
  
  getDZip() { return this.deliveryZipCode; }
  setDZip(s: string) { this.deliveryZipCode = s; }

  getCName() { return this.deliveryContactName; }
  setCName(s: string) { this.deliveryContactName = s; }
  
  getCPhone() { return this.deliveryContactPhone; }
  setCPhone(s: string) { this.deliveryContactPhone = s; }

  getCEmail() { return this.deliveryContactEmail; }
  setCEmail(s: string) { this.deliveryContactEmail = s; }

  getSugPrice() { return this.suggestedPrice; }
  setSugPrice(n: number) { this.suggestedPrice = n; }

  getTotal() { return this.totalAmountDue; }
  setTotal(n: number) { this.totalAmountDue = n; }
}
