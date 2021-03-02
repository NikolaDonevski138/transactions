import { Component, OnInit, OnChanges, DoCheck, Input } from '@angular/core';
import { TransactionState } from '../store/transaction.reducer';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromActions from '../store/transaction.actions';
import * as fromApp from '../store/transaction.reducer';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css'],
})
export class RecentTransactionsComponent implements OnInit, DoCheck {
  @Input() transactions: TransactionState | any;
  recentTransactionsControls: any;
  sortBy: string[] = ['DATE', 'BENEFICIARY', 'AMOUNT'];
  search: string;

  constructor(private store: Store<fromApp.TransactionState>) {}

  ngOnInit(): void {
    this.recentTransactionsControls = new FormGroup({
      searchByTyping: new FormControl('', Validators.required),
      sort: new FormControl(null, Validators.required),
      // sortByType: this.fb.group({
      //   sortBy: ['DATE', [Validators.required]],
      // }),
    });
  }

  ngDoCheck() {
    this.store.dispatch(
      new fromActions.FilterTransactionsBySearch(
        this.recentTransactionsControls.get('searchByTyping').value
      )
    );
    console.log(
      this.recentTransactionsControls.get('searchByTyping').value,
      'jeu'
    );
  }
}

// sortByType: this.fb.group({
//   sortBy: ['DATE', [Validators.required]],
