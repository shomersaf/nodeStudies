import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
minutes!:number;
birthdate!:Date;
res:any;
ngOnInit(): void {
  this.minutes = 156;
  this.birthdate = new Date("May 8,1972 11:20:00");
  // this.res = Math.floor((Number(new Date()) - Number(this.birthdate)) / (60 * 60 * 24 * 365*1000));

}
}
