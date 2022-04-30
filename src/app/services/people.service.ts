import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  private readonly server:string = 'https://fakestoreapi.com/users'
  
  //get
  getUsers(){
    return this.http.get(`${this.server}`);
  }

  //get single course
  getSingleUser(id:number){
    return this.http.get(`${this.server}/${id}`);
  }
}
