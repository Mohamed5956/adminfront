import { Auth } from './../../Models/auth';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  auth : Auth ={} as Auth;

  constructor(private router:Router , private authservice:AuthService) { }

  ngOnInit(): void {

  }


    login()
     {
    this.authservice.auth_login(this.auth).subscribe(
      {next:(data)=>{
        console.log(data.token);
        localStorage.setItem('login',data.token);
          this.router.navigate(['/products']);
            }
           }
    );

    }



}
