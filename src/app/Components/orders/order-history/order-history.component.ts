import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from 'src/app/Models/orders';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orderList:Orders[]=[];

  constructor(private orderService:OrderService,
    private router:Router) { }

  ngOnInit(): void {
    this.orderService.getFinishedOrders().subscribe(e => {
      this.orderList = e;
      // console.log(e);
    });
  }

}
