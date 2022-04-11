import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  CategoryID: number=0;

  Category:Category = {} as Category;

  constructor(
    private activeRoute: ActivatedRoute,
    private router:Router,
    private CategoryService:CategoryService
  ) {

  }

  ngOnInit(): void {
        //to get the specific category i want to update in it
        // console.log(this.activeRoute);
        this.activeRoute.paramMap.subscribe((params)=>{
          this.CategoryID=Number(params.get("cid"));
          // console.log(this.CategoryID);
          this.CategoryService.getCategoryByID(this.CategoryID).subscribe({
            next:(data)=>{this.Category=data;
                          console.log(data);
                        },
          });
        });
  }


  updateCategory(){
    this.CategoryService.updateCategory(this.Category).subscribe({
      next:(res)=>{
          alert(" the category is updated successfully");
          this.router.navigate(['/categories']);
          },
        error:(err)=>{console.log(err)}
    });
}

}
