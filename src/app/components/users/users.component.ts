import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

export interface user{
  address:{
    city:string
    street:string
    zipcode:string
  }
  id:number
  email:string
  username:string
  password:string
  name:{
    firstname:string
    lastname:string
  }
  phone:string
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _usersService:PeopleService) { 
    _usersService
      .getUsers()
      .subscribe((users:any) => {
        this.users = users
      })
  }

  users:user[] = []

  ngOnInit(): void {
  }

}
