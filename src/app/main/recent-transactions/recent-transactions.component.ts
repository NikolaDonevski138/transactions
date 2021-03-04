import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as appStore from '../../shared/store';
import * as transactionActions from '../../shared/store/transaction.actions';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UnsubscribeComponent } from '../../shared/components/unsubscribe/unsubscribe.component';
import { ItemDto } from '../../shared/models/item.dto';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css'],
})
export class RecentTransactionsComponent
  extends UnsubscribeComponent
  implements OnInit {
  items$: Observable<ItemDto[]>;
  recentTransactionsControls: FormGroup;
  sortBy: string[] = ['DATE', 'BENEFICIARY', 'AMOUNT'];
  search: string;

  constructor(private appStore: Store<appStore.AppState>) {
    super();
  }

  ngOnInit(): void {
    this.items$ = this.appStore.select(appStore.getFilteredItems);
    this.recentTransactionsControls = new FormGroup({
      searchByTyping: new FormControl('', Validators.required),
      date: new FormControl('Date'),
    });
    this.recentTransactionsControls.controls.searchByTyping.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe((text: string) => {
        this.appStore.dispatch(
          new transactionActions.FilterTransactionsBySearch(text)
        );
      });
    this.recentTransactionsControls.controls.date.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe((sortType: any) => {
        this.appStore.dispatch(new transactionActions.SortCollection(sortType));
      });
  }

  onBeneficiary() {
    this.appStore.dispatch(new transactionActions.SortByBeneficiary());
  }

  onAmount() {
    this.appStore.dispatch(new transactionActions.SortByAmount());
  }
}
