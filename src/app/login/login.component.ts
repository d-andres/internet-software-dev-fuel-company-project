import { Component, OnInit } from '@angular/core';
import { AuthService } from "../_services/auth.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logged: boolean;
  private form: FormData;

  constructor(private Auth: AuthService) { 
  }

  ngOnInit() {
    this.logged = false;
  }

  submit(event) {
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.form = new FormData();
    this.form.append('username', username);
    this.form.append('password', password);


    this.Auth.getUserDetails(this.form).subscribe(data =>{
      if(data['success']) {
        this.logged = true;
        console.log(data['message'])
      }
      else {
        window.alert(data['message'])
      }
    }, error => {
      window.alert('Invalid Combination.');
    });

  }
}