import { Component, Input, OnInit } from '@angular/core';
import { EmptyPageMessage } from 'src/app/interfaces/EmptyPageMessage';

@Component({
  selector: 'app-empty-page-message',
  templateUrl: './empty-page-message.component.html',
  styleUrls: ['./empty-page-message.component.scss'],
})
export class EmptyPageMessageComponent  implements OnInit {
  @Input() message!: EmptyPageMessage;

  constructor() { }

  ngOnInit() {}

}
