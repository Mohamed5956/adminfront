import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from 'src/app/Models/orders';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderList:Orders[]=[];
  constructor( private orderService:OrderService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.orderService.getPendingOrders().subscribe(e => {
      this.orderList = e;
      console.log(e);
    });

  }

}
