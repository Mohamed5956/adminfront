import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { CategoryService } from 'src/app/Services/category.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit  {
  catList:Category[]=[];
  constructor(
    private categoryService:CategoryService,
    private router:Router) {
      //this.catList = [];
    }


    ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(e => {
      this.catList = e;

      console.log(e);
    });
  }

  getdata() {
    this.categoryService.getAllCategories().subscribe({
      next: (data) => { this.catList = data },
    });
  }

  deleteproduct(catID: number) {
    this.categoryService.deleteCategory(catID).subscribe(
      {
        next: () => {
          this.getdata();
          Swal.fire(
            'Category Deleted!',
            'click the button',
            'success'
          );
        }
      });
  }


}
