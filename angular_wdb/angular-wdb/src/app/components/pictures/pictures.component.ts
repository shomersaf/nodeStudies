import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {
  visibility:boolean = true;

  showOrHide!:string;
  isVisible!:boolean;
pictures=[
  'https://shutok.ru/uploads/posts/2021-09/1631441412_shutok.ru.7.jpg',
  'https://papik.pro/izobr/uploads/posts/2023-02/1676811133_papik-pro-p-na-karikature-dvoe-vorov-s-trudom-tashchat-44.jpg',
  'https://tomatoz.ru/uploads/posts/2012-01/1327217987_1326877806_18531_resize.jpg',
  'https://cf2.ppt-online.org/files2/slide/v/Vxne4bACMc6XNRU1yDrE5BTwp0jLuJ2GvfKFaQ/slide-31.jpg'

]

showPics(){
  this.isVisible = !this.isVisible
  this.isVisible? this.showOrHide = 'hide':this.showOrHide = 'show';
}

toggle(){
this.visibility = !this.visibility
}

container(){

}



ngOnInit(): void {
  this.showOrHide = 'show';
  this.isVisible = false
}}

