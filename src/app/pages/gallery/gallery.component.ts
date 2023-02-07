import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {

  constructor() { 
    document.getElementById('gallery-link')?.classList.add('active');

  }
  ngOnDestroy(): void {
    document.getElementById('gallery-link')?.classList.remove('active');
  }

  ngOnInit(): void {
  }

  
}
