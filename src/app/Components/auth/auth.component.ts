
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  formGroup :FormGroup=new FormGroup({});
  login_user:any=localStorage.getItem('login');

  constructor(private router:Router , private authservice:AuthService) {

   }



  ngOnInit(): void
  {


    this.initForm();

  }

    initForm()
    {
      this.formGroup =new FormGroup({
        email:new FormControl('',[Validators.required]),
        password:new FormControl('',[Validators.required])


      });
    }

    login()
    {
      if(this.formGroup.valid)
      {
        this.authservice.auth_login(this.formGroup.value).subscribe
        (
          data=>
          {
            localStorage.setItem('login',data.token);
            this.router.navigate(['/home']);
            console.log(data.token);
          }

        );
      }
    }



}
