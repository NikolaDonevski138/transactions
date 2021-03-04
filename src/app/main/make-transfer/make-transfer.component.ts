import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromActions from '../../shared/store/transaction.actions';
import * as fromApp from '../../shared/store/transaction.reducer';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.css'],
})
export class MakeTransferComponent implements OnInit {
  makeTransferGroup: any;
  toAccount: string;
  amount: string;
  messageForModal = 'Do you want to make transaction ?';
  submitedForTransaction = false;
  constructor(private store: Store<fromApp.TransactionState>) {}

  ngOnInit(): void {
    this.makeTransferGroup = new FormGroup({
      accountName: new FormGroup({
        fromAccount: new FormControl(
          { value: 'Free Checking(4692) - $5824.76', disabled: true },
          Validators.required
        ),
        toAccount: new FormControl(null, Validators.required),
      }),
      amount: new FormControl(null, [
        Validators.required,
        this.isNumberAboveTheLimit.bind(this),
      ]),
    });
  }

  onClose(): void {
    this.submitedForTransaction = false;
  }

  onSuccess(): void {
    let start: Date = new Date(Date.now());
    let dateInSeconds: number = Date.parse(start.toString());
    this.store.dispatch(
      new fromActions.TransferMoney({
        amount: this.amount,
        merchant: this.toAccount,
        transactionDate: dateInSeconds,
      })
    );
    this.makeTransferGroup.reset({
      accountName: {
        fromAccount: 'Free Checking(4692) - $5824.76',
        toAccount: null,
      },
      amount: null,
    });
    this.submitedForTransaction = false;
  }

  onSubmit(): void {
    this.toAccount = this.makeTransferGroup.controls[
      'accountName'
    ].value.toAccount;
    this.amount = this.makeTransferGroup.controls['amount'].value;
    if (this.makeTransferGroup.status === 'VALID') {
      this.submitedForTransaction = true;
    }
  }

  isNumberAboveTheLimit(control: FormControl): { [s: string]: boolean } | null {
    if (control.value > 500 || control.value < 1) {
      return { numberIsAboveLimit: true };
    }
    return null;
  }
}
