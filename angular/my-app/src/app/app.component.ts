import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  //"NUESTRO JAVASCRIPT"

  constructor() {
    console.log("en el constructor de AppComponent");
  }

  ngOnInit ()
  {
    console.log("en el ngOnInit de AppComponent");
  }
}
