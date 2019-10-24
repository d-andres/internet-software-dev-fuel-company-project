import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuoteService } from '../_services/quote.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quote-history',
  templateUrl: './quote-history.component.html',
  styleUrls: ['./quote-history.component.css']
})
export class QuoteHistoryComponent implements OnInit {
  quoteHistory: QuoteService[];

  constructor(private http: HttpClient) { 
    this.http.get("/api/quoteHistory.json");
    this.getQuotes().subscribe(
      data => this.quoteHistory = data);
  }

  ngOnInit() { 
  }

  getQuoteHistory() { return this.quoteHistory; }
  setQuoteHistory(q: QuoteService[]) { return this.quoteHistory; }
  addQuoteHistory(q : QuoteService) { this.quoteHistory.push(q); }

  getQuotes(): Observable<QuoteService[]> {
    return this.http.get<QuoteService[]>("/api/quoteHistory.json");
  }

}
