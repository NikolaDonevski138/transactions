import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TransactionState } from './store/transaction.reducer';
import * as fromApp from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'transactions';

  transactions: Observable<TransactionState>;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.transactions = this.store.select('transaction');
  }
}
