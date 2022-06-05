import { Component, Input, OnInit } from '@angular/core';

interface Rectangle {
  x: number;
  y: number;
}

// type Rectangle = {
//   x: number;
//   y: number;
// }

// type myName = string;

// interface Rectangle {
//   (x: number, y: number) :number
// }

// type Rectangle = (x: number, y: number) => number;

// interface Triangle extends Rectangle {
//   z: number;
// }

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  ngOnInit(): void {
    let myRectangle: Rectangle;

    myRectangle = (x: number, y: number) => {
      return x * y;
    };
  }
}
