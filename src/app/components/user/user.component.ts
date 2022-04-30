import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';
import { user } from '../users/users.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:user = {} as user
  id:number = 0

  constructor(private usersService:PeopleService,
            private activatedRoute:ActivatedRoute,
            private router:Router) { 
      this.activatedRoute.params.subscribe((params:Params) => {
        this.id = params['id']
      })
  }

  backToUsers(){
    this.router.navigate(['users'])
  }

  ngOnInit(): void {
    this.usersService.getSingleUser(this.id)
                        .subscribe((response:any) => {
                          this.user = response
                        })
  }

}
