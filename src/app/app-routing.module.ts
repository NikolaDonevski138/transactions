import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TransactionModule } from './main/transaction-module.module';
import { SharedModule } from './shared/shared-module.module';

const routes: Routes = [{ path: '', redirectTo: '/transactions', pathMatch: 'full' },
{
  path: 'transactions',
  //loadChildren: './main/transaction-module.module#TransactionModule'
  component:MainComponent
},
{
  path: '**',
  redirectTo: '',
},];

@NgModule({
  imports: [SharedModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

