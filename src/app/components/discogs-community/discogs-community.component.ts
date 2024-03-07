import { Component, Input, OnInit } from '@angular/core';
import { Community } from 'src/app/interfaces/apiresponses/ReleaseResponse';

@Component({
  selector: 'app-discogs-community',
  templateUrl: './discogs-community.component.html',
  styleUrls: ['./discogs-community.component.scss'],
})
export class DiscogsCommunityComponent  implements OnInit {
  @Input() community!: Community;
  @Input() forSale!: number;
  @Input() lowestPrice!: number;

  constructor() { }

  ngOnInit() {}

}
