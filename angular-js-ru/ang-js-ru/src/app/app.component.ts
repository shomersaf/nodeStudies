import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mySrc='https://avatars.mds.yandex.net/i?id=1e32010dbc7e64206fd1815af13d43248e68affd-10415038-images-thumbs&n=13'
  colorName:any = 'yellow';
  toggler = true;
  playing: any;
  i = 0;
  myClass = 'firstClass';
  myStyle: string ='url("https://avatars.mds.yandex.net/i?id=c37b357bfba59e8522aa0df676a8cac883b019e9-9138034-images-thumbs&n=13")';

  pics: string[] = [
    'https://avatars.mds.yandex.net/i?id=1e32010dbc7e64206fd1815af13d43248e68affd-10415038-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=cbfa5fdb5f046af0d57ab43efd494ae806239307-10414807-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=983adaeb2375d8e913b813fe7a45339eeb27d92c-8311400-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=beec3f21a1160ae36c6ee2ac35f672a83af8e46d-10514561-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=752f7f514111e7770a3db2c3d869ccba82d14baf-9709143-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=ad91ad0a71bff56aa3de76a94fa07da1b78414c2-9290563-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=8b88929c5a3676987927dca0121082a3bd9bcb62-9459824-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=c24372b330528fcaf128ffd04905fc53db2a7a88-6849173-images-thumbs&n=13',
  ];

  change() {
    this.toggler = !this.toggler;
    this.toggler
      ? (this.myClass = 'firstClass')
      : (this.myClass = 'secondClass');
  }

  slide() {
    if (this.pics) {
      this.myStyle = `url(${
        this.pics[this.i]
      })`;
      this.i++;
    }
  }

  changeColor(color:any){
    this.colorName=color;
  }

  changeImg(userSrc:string){
    userSrc? this.mySrc = userSrc: this.mySrc = this.mySrc;
  }

}
