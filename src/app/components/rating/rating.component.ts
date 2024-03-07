import { Component, Input, OnInit } from '@angular/core';
import { Rating } from 'src/app/interfaces/apiresponses/ReleaseResponse';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent  implements OnInit {
  @Input() rating!: Rating;
  percentage: number = 0;;
  
  constructor() { }

  ngOnInit() {
    this.percentage = this.rating.average * 20;
  }

  formatRating(rating: number): number {
    return Math.round(rating * 100) / 100;
  }
  
}
