import { AuthService } from 'src/app/Services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authservice:AuthService,private router:Router)
  {

  }

    canActivate():boolean {
    if(this.authservice.admin())
    {
      return true;
    }else
    {
      this.router.navigate(['/not-found']);
      return false;
    }

  }

}
