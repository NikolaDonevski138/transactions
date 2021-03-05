import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SharedModule } from './shared/shared-module.module';
import { TransactionModule } from './main/transaction-module.module';

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
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(appRoutes),
    SharedModule,
    TransactionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}