import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from 'src/app/Models/orders';
import { OrderService } from 'src/app/Services/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  OrderID: number=0;

  Order:Orders = {} as Orders;


  constructor(
    private activeRoute: ActivatedRoute,
    private router:Router,
    private OrderService:OrderService
  ) { }

  ngOnInit(): void {

    //to get the specific Order i want to view / update it
        this.activeRoute.paramMap.subscribe((params)=>{
          this.OrderID=Number(params.get("oid"));
          this.OrderService.getOrderByID(this.OrderID).subscribe({
            next:(data)=>{this.Order=data;
                          console.log(data);
                        },
          });
        });
  }

  updateOrder(){
    this.OrderService.updateOrder(this.Order).subscribe({
      next:(res)=>{
        Swal.fire(
          'The Order Status is updated successfully!',
          'click the button',
          'success'
        );
          this.router.navigate(['/orders']);
          },
        error:(err)=>{console.log(err)}
    });
}

}
