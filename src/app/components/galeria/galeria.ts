import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRIMENG_COMPONENTS } from '../../shared/primeng-shared';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, ...PRIMENG_COMPONENTS],
  templateUrl: './galeria.html',
  styleUrls: ['./galeria.css']
})
export class Galeria {
  showGallery = false;
  selectedIndex = 0;

  images = Array.from({ length: 17 }, (_, index) => {
    const number = index + 1;
    return {
      itemImageSrc: `assets/${number}.jpeg`,
      thumbnailImageSrc: `assets/${number}.jpeg`,
      alt: `Obra ${number}`
    };
  });

  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 5 },
    { breakpoint: '768px', numVisible: 3 },
    { breakpoint: '560px', numVisible: 1 }
  ];

  openGallery(index: number) {
    this.selectedIndex = index;
    this.showGallery = true;
  }

  closeGallery() {
    this.showGallery = false;
  }

  prevImage() {
    this.selectedIndex = (this.selectedIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
  }
}
