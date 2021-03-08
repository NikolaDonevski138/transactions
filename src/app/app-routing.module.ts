import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/transactions', pathMatch: 'full' },
  {
    path: 'transactions',
    loadChildren: () =>
      import('./features/transactions/transactions.module').then(
        (m) => m.TransactionsModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
