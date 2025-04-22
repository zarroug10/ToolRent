import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interface/Product';
import { ImageGalleryService } from '../../services/ImageService/image-gallery.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  imports: [NgFor],
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {
  @Input() product: Product | null = null;
  public currentImage: string | null = null;
  public photos: string[] = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/301',
    'https://picsum.photos/200/302',
  ];
  currentIndex: number = 0;
  constructor(private imageGalleryService: ImageGalleryService) {}

  ngOnInit(): void {
      const productImages = [...this.photos]; 
      this.imageGalleryService.setPhotos(productImages);
      this.currentImage = this.imageGalleryService.getCurrentPhoto();
  }

  nextImage(): void {
    this.currentImage = this.imageGalleryService.nextPhoto();
    this.currentIndex = this.imageGalleryService.getCurrentIndex();
  }

  previousImage(): void {
    this.currentImage = this.imageGalleryService.previousPhoto();
    this.currentIndex = this.imageGalleryService.getCurrentIndex();
  }
}
