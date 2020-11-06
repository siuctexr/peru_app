import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CarouselComponent } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-button-carousal',
  templateUrl: './home-button-carousal.component.html',
  styleUrls: ['./home-button-carousal.component.scss']
})
export class HomeButtonCarousalComponent implements OnInit {

  @ViewChild('owlCar') owlCar: CarouselComponent;

  var1 = 500;
  var2 = 600;
  var3 = 700;

  customOptions: any = {
    autoWidth: true,
    autoHeight: false,
    loop: false,
    // items: '2',
    margin: 10,
    // slideBy: 'page',
    merge: true,
    // autoplay: true,
    // autoplayTimeout: 5000,
    // autoplayHoverPause: true,
    // autoplaySpeed: 4000,
    dotsSpeed: 500,
    // dots: false,
    // dotsData: true,
    // mouseDrag: false,
    // touchDrag: false,
    // pullDrag: false,
    smartSpeed: 400,
    // fluidSpeed: 499,
    dragEndSpeed: 350,
    dotsEach: 4,
    center: false,
    // rewind: true,
    // rtl: true,
    startPosition: 1,
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  };

  constructor() { }

  ngOnInit(): void {
    const width = window.innerWidth;
    this.var1 = width / 4;
    this.var2 = width / 3;
    this.var3 = width / 2 - width / 9;

  }

  mousewheel(event) {
    console.log(event);
    if (event.deltaY > 0) {
      this.owlCar.next();
    } else {
      this.owlCar.prev();
    }
    // (event.target as Element).parentElement.scrollLeft += event.deltaY;
    event.preventDefault();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const width = window.innerWidth;
    this.var1 = width / 4;
    this.var2 = width / 3;
    this.var3 = width / 2;

  }

}
