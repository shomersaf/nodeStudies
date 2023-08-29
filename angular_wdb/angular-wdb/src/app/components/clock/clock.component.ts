import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  mainTitle!: string;
  today!: string;
  
  
    constructor(){
  setInterval(()=>{
    this.today = new Date().toLocaleTimeString()
  },1000)
    }
    ngOnInit(): void {
      this.mainTitle='My brain factory works on'
   
    }}
  
  