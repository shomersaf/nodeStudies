import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{
numberProperty:number = 5;
stringProperty:string ="";
quantumPerfection:any;
name:string|undefined;
model:string|undefined;
speed:number|undefined;
colors!: IColors;
options: string[]|undefined;
test:any;
isEditable:boolean=false;
showHideEdit:string = 'Show';

constructor(){}

ngOnInit(){
this.numberProperty += 100;
this.stringProperty +="Stacey";
this.quantumPerfection = "nakonets-to tak mnogo thisov! Davno ne bylo thisov!";

this.name='Audi';
this.model='RS8';
this.speed=235; 
this.colors={
car:'white',
salon:'yellow',
wheels:'silver'};
this.options=['ABS','autopilot','autopaaarking (finnish)']
this.test=1999;
}


addOpt(option:string){
this.options?.unshift(option);
return false;
}


deleteOpt(option:string){
  for(let i=0; i<=this.options?.length!; i++){
    if(Array.isArray(this.options) && this.options[i]==option)
    this.options?.splice(i, 1)
  break
  }
}

showEdit(){
this.isEditable = !this.isEditable;
this.isEditable? this.showHideEdit ='Hide' : this.showHideEdit ='Show'
}

carSelect(carName:string){
  switch (carName)
{
   case "bmw":
    this.name='BMW';
    this.model='R5';
    this.speed=400; 
    this.colors={
    car:'green',
    salon:'blue',
    wheels:'gold'};
    this.options=['ABS','slow motion autopilot','autoprkng (georgian)']
    this.test=1998;
    break;
   case "audi":
 this.name='Audi';
   this.model='RS8';
   this.speed=235; 
   this.colors={
   car:'white',
   salon:'yellow',
   wheels:'silver'};
   this.options=['ABS','autopilot','autopaaarking (finnish)']
   this.test=1999;;
   break;
   case "mercedes":
    this.name='Mercedes';
    this.model='R8';
    this.speed=155; 
    this.colors={
    car:'blue',
    salon:'white',
    wheels:'metallic'};
    this.options=['ABS','massage','magazines)']
    this.test=1979;
       break;
   default:
   this.name='Audi';
    this.model='RS8';
    this.speed=235; 
    this.colors={
    car:'white',
    salon:'yellow',
    wheels:'silver'};
    this.options=['ABS','autopilot','autopaaarking (finnish)']
    this.test=1999;
}
}



}

interface IColors {
  car: string | undefined;
  salon: string | undefined;
  wheels: string | undefined;
}
