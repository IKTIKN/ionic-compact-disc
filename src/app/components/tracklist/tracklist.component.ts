import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/app/interfaces/apiresponses/ReleaseResponse';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.scss'],
})
export class TracklistComponent  implements OnInit {
  @Input() tracklist!: Track[];
  positionWidth!: string;
  
  constructor() { }

  ngOnInit() {
    this.positionWidth = this.getPositionWidth(this.tracklist);
  }

  // Calculate the minimum position label width in px
  // Use the last 3 tracks in the list because these are the widest
  getPositionWidth(tracklist: Track[]): string {
    const t: number = tracklist.length;
    let mostChars: number = 0;
    for (let x = 1; x<=3; x++) {
      let positionLength: number = tracklist[t - x].position.length;
      if (positionLength > mostChars) mostChars = positionLength;
    }
    return `${mostChars * 8}px`;
  }

}
