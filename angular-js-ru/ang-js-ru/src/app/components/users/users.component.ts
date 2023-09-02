import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
public users!:any;

constructor(
  private _userService:UserService
  ){
  
}

RemoveUser(name:string){
this._userService.remove(name)
this.users = this._userService.getAll()
}

AddUser(name:string,avatar:string, profession:string, tel:string, desc:string){
  if(name){
    this._userService.add(name, avatar, profession, tel, desc)
    this.users = this._userService.getAll()
  }else{
    alert("Enter the name")
  }


}

ngOnInit(): void {
  //this.users = this._userService.getAll()
 this.users = this._userService.getAllFromServer().subscribe(users=>this.users = users)
}
}
