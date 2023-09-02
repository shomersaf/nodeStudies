import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userName='Stacey';
headline:string = 'angular on javascript.ru';
selectedItemFromChild:any;
isVisible=false;
list=[
  'components',
  'directives',
  'variaples',
  'decorators',
  'hooks'
]
}
