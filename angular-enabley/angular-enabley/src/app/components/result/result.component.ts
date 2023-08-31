import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() selectedItem='';
@Input() list:string[]=[];
@Output() itemSelected = new EventEmitter<string>();
setSelectedItem(item:string){
console.log('item selected: ',item);
this.itemSelected.emit(item);
}
}
