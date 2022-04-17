import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { CategoryService } from 'src/app/Services/category.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  CategoryID: number=0;
  selectedImage!: File;
  CategoryFormGroup: FormGroup
  Category:Category = {} as Category;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private activeRoute: ActivatedRoute,
    private router:Router,
    private CategoryService:CategoryService
  ) {
    this.CategoryFormGroup = this.fb.group({
      name: fb.control('', [Validators.required, Validators.minLength(5)]),
      slug: fb.control('', Validators.required),
      description: fb.control('', Validators.required),
    });
  }

  ngOnInit(): void {
        this.CategoryFormGroup.setValue;
        //to get the specific category i want to update in it
        this.activeRoute.paramMap.subscribe((params)=>{
          this.CategoryID=Number(params.get("cid"));
          this.CategoryService.getCategoryByID(this.CategoryID).subscribe({
            next:(data)=>{this.Category=data;
                          console.log(data);
                        },
          });
        });
  }

updateCategory() {
  var formData: any = new FormData;
  formData.append('name', this.name?.value);
  formData.append('slug', this.slug?.value);
  formData.append('description', this.description?.value);
  formData.append('image', this.selectedImage, this.selectedImage.name);
  this.http.post(`${environment.APIBaseURL}/categories/${this.Category.id}?_method=PUT`, formData).subscribe({
    next: (v) => {
      console.log(v);
      Swal.fire(
        'Added Succesfully!',
        'You clicked the button!',
        'success'
      );
      this.router.navigate(['/categories']);
    },
    error: (e) => console.error(e),
  }
  );
}

onSelectedFile(event: any) {
  this.selectedImage = <File>event.target.files[0];
  console.log(this.selectedImage);
}

get name() {
  return this.CategoryFormGroup.get('name');
}

get slug() {
  return this.CategoryFormGroup.get('slug');
}

get description() {
  return this.CategoryFormGroup.get('description');
}

get image() {
  return this.CategoryFormGroup.get('image');
}


}
