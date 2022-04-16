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

  formGroup :FormGroup=new FormGroup({});
  product:Products={} as Products;
  categorylist:Category[]=[];
  error:Products={} as Products;

  constructor(private productservice:ProductsService,private router:Router , private categoryservice:CategoryService) {

    this.formGroup =new FormGroup({
      name: new FormControl('', Validators.required),
      slug: new FormControl('', Validators.required),
      original_price: new FormControl('', Validators.required),
      selling_price: new FormControl('', Validators.required),
      small_description: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      image:new FormControl('',Validators.required)
    });



   }

  ngOnInit(): void {


    this.categoryservice.getAllCategories().subscribe(e => {
      this.categorylist = e;
      //JSON.stringify(catList);
      console.log(e);
    });

  }

     Add()
     {
      const image = new FormData() ;
      image.append('image','','');

    this.productservice.addproduct(this.formGroup.value).subscribe(
      {next:(data)=>{
        if(data)
        {
         Swal.fire("Added Successfully!", "You clicked the button!", "success");
         this.router.navigate(['/products']);

        }

      },

       error:(error)=>
      {
        this.error=error;
        this.router.navigate(['/product/add']);
        console.log(this.error);

      }

     });
   }

}
