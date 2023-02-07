import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input('rate') rate!: number;
  @Input('rateCount') rateCount!: number;

  rating:number[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      if(i<Math.floor(this.rate))this.rating.push(1);
      else if(Math.floor(this.rate)<this.rate) this.rating.push(0);
      else this.rating.push(-1);
    }
  }
}
