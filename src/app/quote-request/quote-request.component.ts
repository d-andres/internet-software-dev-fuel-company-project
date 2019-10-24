import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpClient } from '@angular/common/http';
import { QuoteService } from '../_services/quote.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-quote-request',
  templateUrl: './quote-request.component.html',
  styleUrls: ['./quote-request.component.css']
})
export class QuoteRequestComponent implements OnInit {

  private cId: any;
  private cState: any;
  private form: FormData;
  private toggleForm: boolean;
  private baseRate = 2.19;
  private gallonsReq: any;
  private suggested: any;
  private total: any;


  constructor(private Add: AuthService, private http: HttpClient, private quote: QuoteService) { 
    this.toggleForm = true;

    this.getClientId().subscribe(data =>{
      this.cId = data;
    });

    this.getClientState().subscribe(data =>{
      this.cState = data;
    });

  }

  ngOnInit() {
  }

  setClientId(obj: Object) {
    this.cId = obj;
  }
  getClientId(){
    var fdata = new FormData();
    fdata.append('id', 'clientId');
    return this.http.post("/api/getId.php", fdata);
  }

  getClientState(){
    var fdata = new FormData();
    fdata.append('id', 'state');
    return this.http.post("/api/getId.php", fdata, {responseType: 'text'});
  }

  togForm() {
    if (this.toggleForm == true) {
      this.toggleForm = false;
    }
    else {
      this.toggleForm = true;
    } 
  }

  submit(event) {
    const target = event.target;
    const cliId = this.cId;
    const gallonsRequested = target.querySelector('#gallonsReq').value;
    this.gallonsReq = gallonsRequested;
    const deliveryDate = target.querySelector('#delDate').value;
    const deliveryAddress = target.querySelector('#delAddress').value;
    const deliveryCity = target.querySelector('#delCity').value;
    const deliveryState = target.querySelector('#delState').value;
    const deliveryZipCode = target.querySelector('#delZip').value;
    const deliveryContactName = target.querySelector('#conName').value;
    const deliveryContactPhone = target.querySelector('#conPhone').value;
    const deliveryContactEmail = target.querySelector('#conEmail').value;

    this.form = new FormData();
    this.form.append('clientId', cliId);
    this.form.append('gallonsRequested', gallonsRequested);
    this.form.append('deliveryDate', deliveryDate);
    this.form.append('deliveryAddress', deliveryAddress);
    this.form.append('deliveryCity', deliveryCity);
    this.form.append('deliveryState', deliveryState);
    this.form.append('deliveryZipCode', deliveryZipCode);
    this.form.append('deliveryContactName', deliveryContactName);
    this.form.append('deliveryContactPhone', deliveryContactPhone);
    this.form.append('deliveryContactEmail', deliveryContactEmail);

    this.calcPrice(gallonsRequested);

    this.quote.setSugPrice(this.suggested);
    this.quote.setTotal(this.total);

    this.togForm();
  }

  calcPrice(gallonsReq: number) {
    var locationPercent;
    var amtPerc;

    if ( this.cState == 'TX') {
      locationPercent = .02;
      console.log('Works');
    }
    else {
      locationPercent = .04;
    }

    if ( gallonsReq > 1000) {
      amtPerc = .02;
     }
    else {
      amtPerc = .03;
    }

    var sug = this.baseRate + ((.05 + .04 + locationPercent + .02 + amtPerc) * this.baseRate);
    this.suggested = sug.toFixed(2);
    var tot = sug * gallonsReq;
    this.total = tot.toFixed(2);
  }

  sendQuote() {
    this.form.append('suggestedPrice', this.suggested);
    this.form.append('totalAmountDue', this.total);
    this.Add.addNewQuote(this.form).subscribe(data =>{
      if(data['attempt']) {
        window.alert(data['message'])
      }
      else {
        window.alert(data['message'])
      }
    });
  }

}
