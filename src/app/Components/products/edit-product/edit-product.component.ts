import { CategoryService } from 'src/app/Services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from './../../../Models/category';
import { Products } from './../../../Models/products';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productid:any;
  product:Products={} as Products;
  categorylist:Category[]=[];
  constructor(private activatedroute:ActivatedRoute,private productservice:ProductsService,
    private categoryservice:CategoryService
    ) { }

  ngOnInit(): void {

    this.categoryservice.getAllCategories().subscribe(e => {
      this.categorylist = e;
      console.log(e);
    });



    this.activatedroute.paramMap.subscribe(e=>{
      this.productid=e.get('id');
      if(this.productid){
        this.productservice.getproductbyID(this.productid).subscribe(e=>
          {
          this.product=e;
          console.log(e);
          }
          );


        if(!this.product)
        {
         // this.location.back();

        }

        }
    });

  }

  Edit()
  {
    return this.productservice.editproduct(this.product).subscribe(product=>
    {
      console.log(product);

    });
  }

}
