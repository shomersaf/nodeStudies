import { Component,Input,Output,OnInit,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent {
@Input('headline') headline:string|undefined;
@Input('list') list:string[]|undefined;
@Output() itemSelected:EventEmitter<any> = new EventEmitter();

selectItem(ug:any){
  console.log(ug)
this.headline=ug
  this.itemSelected.emit(this.headline)
}


}
