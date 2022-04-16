import { HomeService } from './../../../Services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any=0;
  clients:any=0;
  orders:any=0;
  sales:any=0;
  constructor(private homeservice:HomeService) { }

  ngOnInit(): void {

     this.homeservice.users().subscribe(data=>
      {
        this.users=data;
      }
      );

      this.homeservice.clients().subscribe(data=>{
        this.clients=data;
      });

      this.homeservice.orders().subscribe(
        data=>{
          //console.log(data);
          this.orders=data;
        }
      );


      this.homeservice.sales().subscribe(data=>{
        console.log(data);
        this.sales=data;

      });

  }





}
