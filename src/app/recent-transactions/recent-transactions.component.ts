import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  Input,
  SimpleChanges,
} from '@angular/core';
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
import { ThrowStmt } from '@angular/compiler';

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
      // sortByType: this.fb.group({
      //   sortBy: ['DATE', [Validators.required]],
      // }),
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

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    //   this.store.dispatch(
    //     new fromActions.FilterTransactionsBySearch(
    //       this.recentTransactionsControls.get('searchByTyping').value
    //     )
    //   );
    // }
  }
  // ngDoCheck() {
  //   this.store.dispatch(
  //     new fromActions.SortCollection(
  //       this.recentTransactionsControls.get('date').value
  //     )
  //   );
  //   console.log(this.recentTransactionsControls.get('date').value, 'dateee');
  // }
}
// sortByType: this.fb.group({
//   sortBy: ['DATE', [Validators.required]],
