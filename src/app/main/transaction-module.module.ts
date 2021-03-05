import { NgModule } from '@angular/core';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { MakeTransferComponent } from './make-transfer/make-transfer.component';
import { SharedModule } from '../shared/shared-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent,RecentTransactionsComponent, MakeTransferComponent],
  imports: [ReactiveFormsModule, SharedModule],
  //exports: [MainComponent,RecentTransactionsComponent, MakeTransferComponent],
})
export class TransactionModule {}
