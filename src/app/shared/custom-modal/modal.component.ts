import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal-info',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() message: string;
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();
  onClose() {
    this.close.emit();
  }

  onConfirm() {
    this.confirm.emit();
  }
}
