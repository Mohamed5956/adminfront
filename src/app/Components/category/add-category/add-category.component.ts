import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { CategoryService } from 'src/app/Services/category.service';
import { environment } from 'src/environments/environment';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';


// import {ImageUploadService} from './image-upload-service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  newCat: Category = {} as Category;
  selectedImage!: File;
  CategoryFormGroup: FormGroup
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private categoryService: CategoryService,
    private http: HttpClient
  ) {
    this.CategoryFormGroup = this.fb.group({
      name: fb.control('', [Validators.required, Validators.minLength(5)]),
      slug: fb.control('', Validators.required),
      description: fb.control('', Validators.required),
      image: fb.control('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.CategoryFormGroup.setValue
  }

  addCategory() {
    var formData: any = new FormData;
    formData.append('name', this.name?.value);
    formData.append('slug', this.slug?.value);
    formData.append('description', this.description?.value);
    formData.append('image', this.selectedImage, this.selectedImage.name);
    this.http.post(`${environment.APIBaseURL}/categories`, formData).subscribe({
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
