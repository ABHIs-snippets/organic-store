import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'image-section',
  templateUrl: './image-section.component.html',
  styleUrls: ['./image-section.component.scss']
})
export class ImageSectionComponent implements OnInit{


  @Input('mainImg') mainImg!:string;
  @Input('subImg') subImg!:any[];

  ngOnInit(): void {
    this.subImg.unshift({imageUrl:this.mainImg});
  }

  changeImg(i:number){
    this.mainImg = this.subImg[i].imageUrl;
  }
}
