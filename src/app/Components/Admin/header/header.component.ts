import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name:any=localStorage.getItem('name');
  constructor(private authservice:AuthService ,private router:Router) { }

  ngOnInit(): void {

  }

  logout()
  {

   return this.authservice.auth_logout().subscribe
   ({
     next:()=>{

      localStorage.removeItem("login");
      localStorage.removeItem("role");
      localStorage.removeItem("name");
      this.router.navigate(['/login']);

     }
    }

   )


  }

}
