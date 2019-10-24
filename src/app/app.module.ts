import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { QuoteHistoryComponent } from './quote-history/quote-history.component';
import { QuoteRequestComponent } from './quote-request/quote-request.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    ClientInfoComponent,
    QuoteHistoryComponent,
    QuoteRequestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
