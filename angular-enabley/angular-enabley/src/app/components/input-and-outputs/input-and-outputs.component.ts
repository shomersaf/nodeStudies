import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-and-outputs',
  templateUrl: './input-and-outputs.component.html',
  styleUrls: ['./input-and-outputs.component.scss']
})
export class InputAndOutputsComponent {
  @Input() newpic='';
}
