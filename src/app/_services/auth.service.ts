import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http:HttpClient) { }

  getUserDetails(form) {
    return this.http.post('/api/auth.php', form)
  }

  addNewQuote(form) {
    return this.http.post('/api/addQuote.php', form)
  }

  updateClient(form) {
    return this.http.post('/api/updateClient.php', form);
  }

}
