import { Component, OnInit } from '@angular/core';
import { ClientService } from '../_services/client.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  client: ClientService[];
  edit: boolean[];

  constructor(private http: HttpClient, private auth: AuthService) { 
    this.edit = [true, true, true, true, true, true];
    this.client = [new ClientService];
    this.http.get("/api/clientInfo.json");
    this.getClient().subscribe(
      data => this.client = data);
  }

  ngOnInit() {
  }

  getClient(): Observable<ClientService[]> {
    return this.http.get<ClientService[]>("/api/clientInfo.json");
  }

  toggleEdit(x: number) {
    if(this.edit[x] == true) {
      this.edit[x] = false;
    }
    else {
      this.edit[x] = true;
    }
  }

  saveData(x: number) {
    var form = new FormData();
    form.append('email', this.client[0].email);

    if (x == 0) {
      form.append('value',this.client[0].fullName);
      form.append('title', 'fullName');
    }
    else if (x == 1) {
      form.append('value',this.client[0].address);
      form.append('title', 'address');
    }
    else if (x == 2) {
      form.append('value',this.client[0].city);
      form.append('title', 'city');
    }
    else if (x == 3) {
      form.append('value',this.client[0].state);
      form.append('title', 'state');
    }
    else if (x == 4) {
      form.append('value',this.client[0].zipCode);
      form.append('title', 'zipCode');
    }
    else if (x == 5) {
      form.append('value',this.client[0].phone);
      form.append('title', 'phone');
    }

    this.auth.updateClient(form).subscribe(data => {
      if (data['attempt']) {
        console.log(data['message']);
      }
      else {
        window.alert(data['message']);
      }
    }//, error => {
   // window.alert('Invalid input.')
    //}
    );

    this.toggleEdit(x);
  }

}
