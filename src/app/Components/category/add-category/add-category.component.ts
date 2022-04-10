import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { CategoryService } from 'src/app/Services/category.service';
import { environment } from 'src/environments/environment';
// import {ImageUploadService} from './image-upload-service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  newCat:Category = {} as Category;
  selectedImage!: File ;
  constructor(
    private router : Router,
    private categoryService:CategoryService,
    private http:HttpClient
    ) { }

  ngOnInit(): void {
  }

  addCategory(){
    const image = new FormData();
    image.append('image',this.selectedImage,this.selectedImage.name);
    console.log(image);
    this.categoryService.addCategory(this.newCat).subscribe({
          next:(prd)=>{this.router.navigate(['/categories']);},
          error:(err)=>{alert('error occured')}
        });
  }

  onSelectedFile(event:any){
    this.selectedImage=<File>event.target.files[0];
  }

  uploadImage(){
    const image = new FormData();
    image.append('image',this.selectedImage,this.selectedImage.name);
    this.http.post('https://localhost:8000/api/categories',image)
    .subscribe(res=>{
      console.log(res);
    });
  }

}
