import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ProductDialogComponent } from "../../shared/product-dialog/product-dialog.component";
import { Product } from '../../interface/Product';

@Component({
  selector: 'app-home',
  imports: [NgFor, NgIf, ProductDialogComponent,NgClass],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public data! :Product;
  
 public  products :Product[] = [
    { name: 'Scented Candle', description: 'A relaxing lavender-scented candle.', image: 'https://picsum.photos/200/300' },
    { name: 'Decorative Candle', description: 'A beautiful decorative candle.', image: 'https://picsum.photos/200/320' },
    { name: 'Wellness Candle', description: 'Promotes wellness and relaxation.', image: 'https://picsum.photos/200/310' },
    { name: 'Holiday Candle', description: 'Perfect for the holiday season.', image: 'https://picsum.photos/200/330' },
    { name: 'Vanilla Candle', description: 'Sweet vanilla-scented candle.', image: 'https://picsum.photos/200/340' },
    { name: 'Rose Candle', description: 'Romantic rose-scented candle.', image: 'https://picsum.photos/200/301' },
    { name: 'Citrus Candle', description: 'Refreshing citrus-scented candle.', image: 'https://picsum.photos/200/210' },
    { name: 'Ocean Breeze Candle', description: 'Calming ocean breeze candle.', image: 'https://picsum.photos/200/400' },
    { name: 'Woodland Candle', description: 'Earthy woodland-scented candle.', image: 'https://picsum.photos/200/500' },
    { name: 'Berry Candle', description: 'Sweet berry-scented candle.', image: 'https://picsum.photos/200/700' }
  ];
  reviews = [
    {
      title: 'Great Tool!',
      content: 'This tool has made my farming tasks so much easier. Highly recommend!',
      rating: 5,
      author: 'John Doe'
    },
    {
      title: 'Good Quality',
      content: 'The quality of the tools is excellent. Will definitely buy again.',
      rating: 4,
      author: 'Jane Smith'
    },
    {
      title: 'Affordable and Reliable',
      content: 'Affordable prices and reliable tools. Very satisfied with my purchase.',
      rating: 5,
      author: 'Ahmed Ali'
    },
    {
      title: 'Decent Experience',
      content: 'The tools are good, but delivery took longer than expected.',
      rating: 3,
      author: 'Emily Johnson'
    }
  ];

  public currentPage = 1;
  public itemsPerPage = 4;
  public isOpen = false;

  public get paginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.products.slice(startIndex, endIndex);
  }

 public  get totalPages() {
    return Math.ceil(this.products.length / this.itemsPerPage);
  }

  public changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
 public openDialog() {
    this.isOpen = true;
  } 
  
  public setProductData(product: Product) {
    this.data = product;
  }

}
