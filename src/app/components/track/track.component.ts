import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/app/interfaces/ReleaseResponse';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {
  @Input() track!: Track;
  @Input() positionWidth!: string;

  isExpanded: boolean = false;

  constructor() { }

  ngOnInit() {}

  toggleIsExpanded(): void {
    if (this.track.extraartists) this.isExpanded = !this.isExpanded;
  }

  getDetailIcon(): string {
    if (!this.track.extraartists) return 'none';
    return this.isExpanded ? 'chevron-up-outline' : 'chevron-forward-outline';
  }
  
}
