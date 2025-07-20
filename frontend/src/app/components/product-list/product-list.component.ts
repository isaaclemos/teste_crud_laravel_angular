import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../services/product-service';
import { Product } from '../../interfaces/product';
import { ConfirmationModalComponent } from '../confirm-modal/confirm-modal.component';
import { getEmptyProduct } from '../../resources/product-resoucer';
import { AddEditModal } from '../add-edit-modal/add-edit-modal';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, NgbModule, NgbPaginationModule],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  productsCopy: Product[] = [];

  page: number = 1;
  pageSize: number = 10;

  constructor(private productService: ProductService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
      this.productsCopy = products;
    });
  }

  paginatedProducts(): Product[] {
    const start = (this.page - 1) * this.pageSize;
    return this.products.slice(start, start + this.pageSize);
  }

  openAddModal(): void {
    const modalRef = this.modalService.open(AddEditModal);
    modalRef.closed.subscribe((product: Product) => this.saveProduct(product));
  }

  openEditModal(product: Product): void {
    const modalRef = this.modalService.open(AddEditModal);
    modalRef.componentInstance.product = { ...product};
    modalRef.closed.subscribe((product: Product) => this.saveProduct(product))
  }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const name = target.value.toLowerCase();
    this.products = this.productsCopy.filter(product => product.name.toLowerCase().includes(name));
  }

  deleteProduct(id: number): void {
    this.modalService.open(ConfirmationModalComponent).result
      .then(result => {
        if (result !== 'confirm') return;

        this.productService.deleteProduct(id).subscribe(() => {
          this.products = this.products.filter(product => product.id !== id);
          this.page = Math.min(this.page, Math.ceil(this.products.length / this.pageSize) || 1);
        });
      })
      .catch();
  }

  saveProduct(product: Product): void {
    const productOperation = product.id > 0
      ? this.productService.updateProduct(product)
      : this.productService.createProduct(product);

    productOperation.subscribe(() => this.loadProducts());
  }

}
