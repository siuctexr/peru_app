import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-button-horizontal',
  templateUrl: './home-button-horizontal.component.html',
  styleUrls: ['./home-button-horizontal.component.scss']
})
export class HomeButtonHorizontalComponent implements OnInit {

  @ViewChild('scrollBox') scrollBox: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onWheel(event: WheelEvent): void {
    this.scrollBox.nativeElement.scrollLeft += event.deltaY;
    // (event.target as Element).parentElement.scrollLeft += event.deltaY;
    event.preventDefault();
  }

  onWheelParent(event: WheelEvent): void {
    this.scrollBox.nativeElement.scrollLeft += event.deltaY;
    // (event.target as Element).scrollLeft += event.deltaY;
    event.preventDefault();
  }

  leftScroll() {
    this.scrollBox.nativeElement.scrollLeft -= 250;
  }

  rightScroll() {
    this.scrollBox.nativeElement.scrollLeft += 250;
  }

  onSwipe(event) {

    (event.target as Element).parentElement.scrollLeft -= event.deltaX;
    event.preventDefault();

    // const x =
    //   Math.abs(
    //     event.deltaX) > 40 ? (event.deltaX > 0 ? 'Right' : 'Left') : '';

    //     const y =
    //   Math.abs(
    //     event.deltaY) > 40 ? (event.deltaY > 0 ? 'Down' : 'Up') : '';

    // let direction =
    //   `You swiped in <b> ${x} ${y} </b> direction <hr>`;
  }

}
