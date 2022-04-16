import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from './../../../Models/category';
import { Products } from './../../../Models/products';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { CategoryService } from 'src/app/Services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  formGroup :FormGroup;
  //product:Products={} as Products;
  categorylist:Category[]=[];
  error:Products={} as Products;
  selectedImage!: File;
  constructor(private productservice:ProductsService,private router:Router , private categoryservice:CategoryService, private fb:FormBuilder) {

    this.formGroup =this.fb.group({
      name:this.fb.control('', Validators.required),
      slug: this.fb.control('', Validators.required),
      original_price:this.fb.control('', Validators.required),
      selling_price: this.fb.control('', Validators.required),
      small_description: this.fb.control('', Validators.required),
      description:this.fb.control('', Validators.required),
      category_id: this.fb.control('', Validators.required),
      quantity:this.fb.control('', Validators.required),
      image:this.fb.control('',Validators.required)
    });



   }

  ngOnInit(): void {

    this.formGroup.setValue;

    this.categoryservice.getAllCategories().subscribe(e => {
      this.categorylist = e;
    });

  }

     Add()
     {
      var formData: any = new FormData;
     formData.append('name', this.name?.value);
     formData.append('slug', this.slug?.value);
     formData.append('description', this.description?.value);
     formData.append('quantity', this.quantity?.value);
     formData.append('selling_price', this.selling_price?.value);
     formData.append('original_price', this.original_price?.value);
     formData.append('small_description', this.small_description?.value);
     formData.append('category_id', this.category_id?.value);
     formData.append('image', this.selectedImage, this.selectedImage.name);

     this.productservice.addproduct(formData).subscribe(
      {next:(data)=>{
        if(data)
        {
         Swal.fire("Added Successfully!", "You clicked the button!", "success");
         this.router.navigate(['/products']);

        }

      },

       error:(error)=>
      {
        this.router.navigate(['/product/add']);
        console.log(error);

      }

     });
   }

   onSelectedFile(event: any) {
    this.selectedImage = <File>event.target.files[0];
  }

  get name() {
    return this.formGroup.get('name');
  }

  get slug() {
    return this.formGroup.get('slug');
  }

  get description() {
    return this.formGroup.get('description');
  }

  get image() {
    return this.formGroup.get('image');
  }

  get quantity() {
    return this.formGroup.get('quantity');
  }

  get selling_price() {
    return this.formGroup.get('selling_price');
  }
  get original_price() {
    return this.formGroup.get('original_price');
  }

  get small_description() {
    return this.formGroup.get('small_description');
  }

  get category_id() {
    return this.formGroup.get('category_id');
  }

}
