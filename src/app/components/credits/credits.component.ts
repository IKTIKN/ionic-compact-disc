import { Component, Input, OnInit } from '@angular/core';
import { Extraartist } from 'src/app/interfaces/ReleaseResponse';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss'],
})
export class CreditsComponent  implements OnInit {
  @Input() credits!: Extraartist[];
  
  constructor() { }

  ngOnInit() {}

}
