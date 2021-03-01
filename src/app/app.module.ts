import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MakeTransferComponent } from './make-transfer/make-transfer.component';
import * as fromApp from './store/app.reducer';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component'
import { CustomDatePipe } from './pipes/dataTransformPipe';


@NgModule({
  declarations: [
    AppComponent,
     HeaderComponent,
      MakeTransferComponent,
       RecentTransactionsComponent,
        CustomDatePipe
      ],
  imports: [BrowserModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(fromApp.appReducer),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
