import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../interfaces/product';
import { getEmptyProduct } from '../../resources/product-resoucer';

@Component({
  selector: 'app-add-edit--modal',
  imports: [FormsModule],
  templateUrl: './add-edit-modal.html',
  styleUrl: './add-edit-modal.css'
})
export class AddEditModal {
  @Input() product: Product = getEmptyProduct();
  constructor(public modalService: NgbActiveModal) { }
}
