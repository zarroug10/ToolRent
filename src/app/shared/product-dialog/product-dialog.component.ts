import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interface/Product';

@Component({
  selector: 'app-product-dialog',
  imports: [],
  templateUrl: './product-dialog.component.html',
  styleUrl: './product-dialog.component.css'
})
export class ProductDialogComponent {
  @Input() product: Product | null = null;


}
