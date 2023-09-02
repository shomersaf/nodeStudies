import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
birthDate = new Date();
welcome='Welcome to my Resume Web Site';
pipeHolder= ' some words ';
suffixCount=0;
m!:Movie;

ngOnInit(): void {
  setInterval(()=>{
    this.suffixCount++;
  },5000)
}

}
