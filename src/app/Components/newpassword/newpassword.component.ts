import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {
  formGroup :FormGroup=new FormGroup({});
  passwordGroup:FormGroup=new FormGroup({});
  showconfirmpassword:number=0;
  newpassord:any=0;
  err_password:any=0;
  err_email:any='';

  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm()
  {
     this.formGroup =new FormGroup({
      email:new FormControl('',[Validators.required])

    });


    this.passwordGroup =new FormGroup({
      password:new FormControl('',[Validators.required]),
      email:new FormControl(''),

    });



  }

  resetpassword()
  {
    if(this.formGroup.valid)
    {

      this.authservice.sendemail(this.formGroup.value).subscribe({
        next:(data)=>{
        if(data!='error')
        {
          this.newpassord=data;
          this.showconfirmpassword=1;
          this.router.navigate(['/password/reset']);

        }else
        {
          this.err_email="Invaild Email";


         }
         },
         error:()=>{
          this.err_email="Invaild Email";

         }

      }
        );
    }else
    {
      this.err_email='*Email is required.';
    }
  }

  confirmpassword()
  {
    this.passwordGroup.value['email']=this.formGroup.value['email'];

    if(this.passwordGroup.valid){
     console.log( this.passwordGroup.value['password']);
     if(this.passwordGroup.value['password']==this.newpassord)
     {

       this.authservice.updatepassword(this.passwordGroup.value).subscribe(data=>
        {

          Swal.fire(
            'Updated Successfully!',
            'You clicked the button!',
            'success'
          );
          this.router.navigate(['/login']);
        }
        );

     }else
     {
       this.err_password="Invaild Password";
     }

    }else
    this.err_password="*Confirm Password is required.";



  }

}
