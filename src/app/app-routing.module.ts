import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { QuoteHistoryComponent } from './quote-history/quote-history.component';
import { QuoteRequestComponent } from './quote-request/quote-request.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'about', component: AboutComponent },
  {path: 'client-info', component: ClientInfoComponent },
  {path: 'quote-history', component: QuoteHistoryComponent },
  {path: 'quote-request', component: QuoteRequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
