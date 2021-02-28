import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import * as fromApp from '../store/app.reducer'
import { TransactionState } from '../store/transaction.reducer';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css']
})
export class RecentTransactionsComponent implements OnInit {
  @Input() transactions:TransactionState

  ngOnInit(): void {

  }

  ngOnDestroy(){

  }
}
