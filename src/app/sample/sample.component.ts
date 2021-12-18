import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  @Input() counter = 0;
  @Output() onRegister = new EventEmitter<string>();

  title = 'Angular 13';

  constructor() {}

  ngOnInit(): void {}

  handler(args: MouseEvent): void {
    console.log('Emitting the event from Sample');
    this.onRegister.emit('Good evening from Sample');
  }
}
