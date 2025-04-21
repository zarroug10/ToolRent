import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ProductDialogComponent } from "../../shared/product-dialog/product-dialog.component";

@Component({
  selector: 'app-home',
  imports: [NgFor, NgIf, ProductDialogComponent,NgClass],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 public  products = [
    { name: 'Scented Candle', description: 'A relaxing lavender-scented candle.', image: 'images/image.png' },
    { name: 'Decorative Candle', description: 'A beautiful decorative candle.', image: 'images/image.png' },
    { name: 'Wellness Candle', description: 'Promotes wellness and relaxation.', image: 'images/image.png' },
    { name: 'Holiday Candle', description: 'Perfect for the holiday season.', image: 'images/image.png' },
    { name: 'Vanilla Candle', description: 'Sweet vanilla-scented candle.', image: 'images/image.png' },
    { name: 'Rose Candle', description: 'Romantic rose-scented candle.', image: 'images/image.png' },
    { name: 'Citrus Candle', description: 'Refreshing citrus-scented candle.', image: 'images/image.png' },
    { name: 'Ocean Breeze Candle', description: 'Calming ocean breeze candle.', image: 'images/image.png' },
    { name: 'Woodland Candle', description: 'Earthy woodland-scented candle.', image: 'images/image.png' },
    { name: 'Berry Candle', description: 'Sweet berry-scented candle.', image: 'images/image.png' }
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
  public isParagraphOverflowing(element: HTMLElement): boolean {
    const computedStyle = window.getComputedStyle(element);
    const lineHeight = parseFloat(computedStyle.lineHeight);
    const maxLines = parseInt(computedStyle.webkitLineClamp || '0', 10);
    const maxHeight = lineHeight * maxLines;
    return element.scrollHeight > maxHeight;
  }
}
