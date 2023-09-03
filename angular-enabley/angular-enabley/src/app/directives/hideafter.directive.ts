import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHideafter]'
})
export class HideafterDirective {
@Input() hideafter:number = 0;
  constructor() { }
@HostBinding('class.invisible') IsInvisible = false;
@HostListener('click',['$event']) onMouseClick(e:MouseEvent){
  console.log('directive works!',this.hideafter )
  setTimeout(()=>{
this.IsInvisible = true;
  },this.hideafter)
}

}
