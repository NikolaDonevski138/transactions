import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import * as fromApp from './shared/store';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { RecentTransactionsComponent } from './main/recent-transactions/recent-transactions.component';
import { UnsubscribeComponent } from './shared/components/unsubscribe/unsubscribe.component';
import { ModalComponent } from './shared/custom-modal/modal.component';
import { CustomDatePipe } from './shared/pipes/dataTransformPipe';
import { MakeTransferComponent } from './main/make-transfer/make-transfer.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/transactions', pathMatch: 'full' },
  {
    path: 'transactions',
    component: AppComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MakeTransferComponent,
    RecentTransactionsComponent,
    CustomDatePipe,
    ModalComponent,
    UnsubscribeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes),
    StoreModule.forRoot(fromApp.appReducer),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
