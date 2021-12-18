import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appCounter = 90;

  parentHandler(args: string): void {
    console.log('Parent', args);
  }
}
