// src/app/confirmation-modal/confirmation-modal.component.ts
import { Component } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [],
  templateUrl: './confirm-modal.component.html'
})
export class ConfirmationModalComponent {
  constructor(public activeModal: NgbActiveModal) { }
}

