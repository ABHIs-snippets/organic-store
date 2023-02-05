import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{

  constructor(private _categoryService:CategoryService){}

  categories:any[] = [];


  ngOnInit(): void {
    this._categoryService.category.subscribe((res:any)=>{
      this.categories = res.categories;
    })
  }

}
