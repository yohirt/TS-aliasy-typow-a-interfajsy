import { Component, Input, OnInit } from '@angular/core';

// Merge interfaces is possibly
// interface Rectangle {
//   x: number;
// }

// interface Rectangle {
//   y: number;
// }

// Merge types is not posibly
// type Rectangle  = {
//   x: number
// };

// type Rectangle = {
//   y: number
// };

type Triangle = Rectangle & { z: number };

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  ngOnInit(): void {
    // let myRectangle: Rectangle;
    // myRectangle = (x: number, y: number) => {
    //   return x * y;
    // };
  }
}
