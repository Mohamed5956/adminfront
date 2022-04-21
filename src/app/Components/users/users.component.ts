import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/Models/users';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  UsersList:Users[] = [];
    constructor(private router:Router,
    private httpClient:HttpClient,
    private UsersService:UserService) { }

    ngOnInit(): void {
      this.UsersService.getAllUsers().subscribe(e => {
        this.UsersList = e;
        console.log(e);
      });
    }

}
