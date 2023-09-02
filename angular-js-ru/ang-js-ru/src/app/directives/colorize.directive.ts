import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorize]',
  exportAs:'colorize'
})
export class ColorizeDirective {
@HostBinding('style.background-color') newColor!:string;
//для обработки свойств
 @HostListener('click',['$event']) colorizeDiv(event: any){
 this.setRandomColor();
  this.counter++;
  console.log(this.counter)
 };
//для обработки событий
public counter:number = 0;


setRandomColor(){
  this.newColor='#'+ Math.floor(Math.random()*16777215).toString(16);
}


  constructor() { 
    setTimeout(()=>{
      this.newColor='red';
    },2000)
  }

}
