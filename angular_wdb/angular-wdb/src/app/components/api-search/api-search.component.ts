import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-search',
  templateUrl: './api-search.component.html',
  styleUrls: ['./api-search.component.css']
})
export class ApiSearchComponent {
  userName:string='';
  response:any;
  created:string='';
  
    constructor(private http:HttpClient){
  
    }
   search(){
    this.http.get('https://api.github.com/users/'+this.userName)
    .subscribe((response)=>{
      this.response = response;
     this.created = new Date(this.response?.created_at as any).toDateString()
      console.log(this.response)
    })
   }
}
