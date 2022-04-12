import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authservice:AuthService ,private router:Router) { }

  ngOnInit(): void {
  }

  logout()
  {

   return this.authservice.auth_logout().subscribe
   ({
     next:()=>{

      localStorage.removeItem("login");
      this.router.navigate(['/login']);

     }
    }

   )


  }

}
