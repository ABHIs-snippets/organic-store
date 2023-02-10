import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReviewService } from '../services/review.service';

export interface ConfirmModel {
  title: string;
  message: string;
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  constructor(private fb: FormBuilder, private _review:ReviewService) {}

  @Input('productId') productId!:string;

  isShowForm = false;

  reviewForm!: FormGroup;

  ngOnInit(): void {
    this.reviewForm = this.createForm();
  }

  createForm() {
    return this.fb.group({
      title: [''],
      description: [''],
      ratingValue: [''],
      userName: [''],
      productId: [this.productId],
    });
  }

  saveReview(){
    this._review.giveReview(this.reviewForm.value).subscribe(console.log);
  }
}
