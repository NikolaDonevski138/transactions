import { NgModule} from '@angular/core';


import { ReactiveFormsModule } from '@angular/forms';
import { TransactionsComponent } from './transactions.component';
import { SharedModule } from 'src/app/shared/shared-module.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import * as fromApp from '../transactions/shared/store'
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { MakeTransferComponent } from './make-transfer/make-transfer.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', redirectTo: '/transactions', pathMatch: 'full' },
{
  path: '',
  component: TransactionsComponent
},
];


@NgModule({
  declarations: [TransactionsComponent, RecentTransactionsComponent, MakeTransferComponent],
  imports: [RouterModule.forChild(routes),StoreModule.forRoot(fromApp.appReducer),StoreRouterConnectingModule.forRoot(),ReactiveFormsModule, SharedModule],
  exports: [TransactionsComponent, RecentTransactionsComponent, MakeTransferComponent],
 
})
export class TransactionsModule {}
