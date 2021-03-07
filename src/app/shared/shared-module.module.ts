import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { UnsubscribeComponent } from './components/unsubscribe/unsubscribe.component';



import { ItemTransactionBorderDirective } from './directives/item-transaction-border-directive.directive';
import { CustomDatePipe } from './pipes/dataTransformPipe';

@NgModule({
  declarations: [ItemTransactionBorderDirective, UnsubscribeComponent, ConfirmationDialogComponent, CustomDatePipe],
  imports: [
    CommonModule,
  ],
  exports: [
    ItemTransactionBorderDirective,
    UnsubscribeComponent,
    ConfirmationDialogComponent,
    CustomDatePipe,
    CommonModule,
  ],
})
export class SharedModule {}
