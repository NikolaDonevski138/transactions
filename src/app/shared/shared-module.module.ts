import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import * as fromApp from '../shared/store';
import { UnsubscribeComponent } from './components/unsubscribe/unsubscribe.component';
import { ModalComponent } from './custom-modal/modal.component';
import { ItemTransactionBorderDirective } from './directives/item-transaction-border-directive.directive';
import { CustomDatePipe } from './pipes/dataTransformPipe';

@NgModule({
  declarations: [ItemTransactionBorderDirective, UnsubscribeComponent, ModalComponent, CustomDatePipe],
  imports: [
    StoreModule.forRoot(fromApp.appReducer),
    StoreRouterConnectingModule.forRoot(),
    CommonModule,
  ],
  exports: [
    ItemTransactionBorderDirective,
    UnsubscribeComponent,
    ModalComponent,
    CustomDatePipe,
    StoreModule,
    StoreRouterConnectingModule,
    CommonModule,
  ],
})
export class SharedModule {}
