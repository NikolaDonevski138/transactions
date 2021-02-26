import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.css'],
})
export class MakeTransferComponent implements OnInit {
  makeTransfer: any;
  fromAccount: string = '';
  toAccount: string;
  amount: string;
  constructor() {}

  ngOnInit(): void  {
    this.makeTransfer = new FormGroup({
        'accountname': new FormGroup({
          'fromaccount': new FormControl({value:this.fromAccount,disabled:true}, Validators.required),
          'toaccount': new FormControl(null, Validators.required),
      }),
      'amount': new FormControl(null, [Validators.required, this.isNumberAboveTheLimit.bind(this)]),
    });
    this.makeTransfer.patchValue({
      'accountname':{
        'fromaccount':'Free Checking(4692) - $5824.76'
      }
    })
  }

  onSubmit(){
    console.log(this.makeTransfer)
    this.fromAccount = this.makeTransfer.get('accountname.fromaccount').value
    this.toAccount = this.makeTransfer.get('accountname.toaccount').value
    this.amount = this.makeTransfer.get('amount').value
    this.makeTransfer.reset({ accountname:{
      fromaccount:this.fromAccount,
      toaccount:null,
    },
    amount:null
    })
  }

  isNumberAboveTheLimit(control: FormControl): {[s:string]: boolean} | null {
    // added here greater than 1 because in example is 0 - 500 
    // but i think making request(to network) 
    // with 0$ ammount some time in the future will be unneccessery
    if(control.value > 500 || control.value < 1){
      return { 'numberIsAboveLimit': true }
    }
    return null;
  }
}
