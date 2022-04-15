import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInformation } from 'src/app/Models/user-information';
import { Users } from 'src/app/Models/users';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  UserID: number=0;

  User:UserInformation = {} as UserInformation;


  constructor(
    private activeRoute: ActivatedRoute,
    private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
     //to get the specific user i want to view / update it
      this.activeRoute.paramMap.subscribe((params)=>{
      this.UserID=Number(params.get("id"));
      this.userService.getUserByID(this.UserID).subscribe({
        next:(data)=>{
                      this.User=data;
                      console.log(data);
                    },
      });
    });
  }

  updateUser(){
    this.userService.updateUser(this.User).subscribe({
      next:(res)=>{
        Swal.fire(
          'The User Role is updated successfully!',
          'click the button',
          'success'
        );
          this.router.navigate(['/usersAdmin']);
          },
        error:(err)=>{console.log(err)}
    });
}

}
