import { Directive, HostListener , HostBinding} from '@angular/core';

@Directive({
  selector: '[appOnlyHebrew]'
})
export class OnlyHebrewDirective {

@HostBinding('class.is-not-valid') isNotValid = false;
  constructor() { }

  @HostListener('keypress',['$event']) onKeyPress(e:KeyboardEvent){
    if(e.keyCode<1488 || e.keyCode>1514){
      this.isNotValid = true;
      e.preventDefault()
      setTimeout(()=>{
        this.isNotValid = false;
      },1000)
    }else{

    }
  }
}
