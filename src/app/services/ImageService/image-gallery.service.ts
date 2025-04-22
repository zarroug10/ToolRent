import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageGalleryService {
  private photos: string[] = [];
  private currentIndex: number = 0;

  constructor() {}

  setPhotos(photos: string[]): void {
    this.photos = photos;
    this.currentIndex = 0;
  }

  getCurrentPhoto(): string | null {
    return this.photos.length > 0 ? this.photos[this.currentIndex] : null;
  }

  nextPhoto(): string | null {
    if (this.photos.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.photos.length;
      return this.getCurrentPhoto();
    }
    return null;
  }

  previousPhoto(): string | null {
    if (this.photos.length > 0) {
      this.currentIndex =
        (this.currentIndex - 1 + this.photos.length) % this.photos.length;
      return this.getCurrentPhoto();
    }
    return null;
  }

  getPhotoAtIndex(index: number): string | null {
    if (index >= 0 && index < this.photos.length) {
      this.currentIndex = index;
      return this.photos[this.currentIndex];
    }
    return null;
  }

  getPhotos(): string[] {
    return this.photos;
  }

  getCurrentIndex(): number {
    return this.currentIndex;
  }
}
