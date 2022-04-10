import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  catList:Category[];
  constructor(
    private categoryService:CategoryService,
    private router:Router,) {
      this.catList = [];
    }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(catList => {
      this.catList = catList;
      JSON.stringify(catList);
      console.log(catList);
    });
  }

  // getdata() {
  //   this.categoryService.getAllCategories().subscribe({
  //     next: (data) => { this.catList = data },
  //   });
  // }

}
