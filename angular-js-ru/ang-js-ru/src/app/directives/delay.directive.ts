import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective implements OnInit{
@Input() appDelay!:number;
  constructor(   
    private template: TemplateRef<any>,
    private view: ViewContainerRef
    ) { }

    setPresence(){
      this.view.createEmbeddedView(this.template)
    }

    ngOnInit(): void {
      setTimeout(()=>{
        this.setPresence()
      },this.appDelay)

    }}


