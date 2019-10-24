import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientId: string;
  fullName: string;
	address: string;
	city: string;
	state: string;
	zipCode: string;
  phone: string;
  email: string;
  
  constructor() {
		this.clientId = '';
  	this.fullName = '';
		this.address = '';
		this.city = '';
		this.state = '';
		this.zipCode = '';
	  this.phone = '';
 		this.email = '';
  }

	getClientId() { return this.clientId; }
	setClientId(n: string) { this.clientId = n; }
	
	getName() { return this.fullName; }
	setName(n: string) { this.fullName = n; }
		
	getAddress() { return this.address; }
	setAddress(a: string) { this.address = a; }

	getCity() { return this.city; }
	setCity(a: string) { this.city = a; }

	getState() { return this.state; }
	setState(a: string) { this.state = a; }

	getZip() { return this.zipCode; }
	setZip(a: string) { this.zipCode = a; }
		
	getPhone() { return this.phone; }
	setPhone(p: string) { this.phone = p; }
	
	getEmail() { return this.email; }
	setEmail(e: string) { this.email = e; }
}
