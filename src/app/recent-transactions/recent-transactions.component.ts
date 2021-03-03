import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
} from '@angular/core';
import { TransactionState } from '../store/transaction.reducer';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromActions from '../store/transaction.actions';
import * as fromApp from '../store/transaction.reducer';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css'],
})
export class RecentTransactionsComponent implements OnInit, OnChanges {
  @Input() transactions: TransactionState | any;
  recentTransactionsControls: any;
  sortBy: string[] = ['DATE', 'BENEFICIARY', 'AMOUNT'];
  search: string;

  constructor(private store: Store<fromApp.TransactionState>) {}

  ngOnInit(): void {
    this.recentTransactionsControls = new FormGroup({
      searchByTyping: new FormControl('', Validators.required),
      sort: new FormControl(null, Validators.required),
      date: new FormControl('Date'),
    });
    this.recentTransactionsControls
      .get('searchByTyping')
      .valueChanges.pipe()
      .subscribe((text: any) => {
        this.store.dispatch(new fromActions.FilterTransactionsBySearch(text));
      });
    this.recentTransactionsControls
      .get('date')
      .valueChanges.pipe()
      .subscribe((sortType: any) => {
        this.store.dispatch(new fromActions.SortCollection(sortType));
      });
  }

  onBeneficiary() {
    // this.store.dispatch(new fromActions);
  }

  onAmount() {
    this.store.dispatch(new fromActions.SortByAmount());
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
