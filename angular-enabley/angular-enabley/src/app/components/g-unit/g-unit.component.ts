import { Component, Input } from '@angular/core';
import { IGUnit } from 'src/app/models/gallery-unit.model';

@Component({
  selector: 'app-g-unit',
  templateUrl: './g-unit.component.html',
  styleUrls: ['./g-unit.component.scss']
})
export class GUnitComponent {
@Input() gUnit!:IGUnit;
}
