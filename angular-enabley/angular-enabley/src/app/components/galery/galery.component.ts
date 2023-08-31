import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit{
visible = false;

//  pics:string[]=[
//     'https://avatars.mds.yandex.net/i?id=c37b357bfba59e8522aa0df676a8cac883b019e9-9138034-images-thumbs&n=13',
//     'https://avatars.mds.yandex.net/i?id=1e32010dbc7e64206fd1815af13d43248e68affd-10415038-images-thumbs&n=13',
//     'https://avatars.mds.yandex.net/i?id=cbfa5fdb5f046af0d57ab43efd494ae806239307-10414807-images-thumbs&n=13',
   
//     'https://avatars.mds.yandex.net/i?id=983adaeb2375d8e913b813fe7a45339eeb27d92c-8311400-images-thumbs&n=13',
//     'https://avatars.mds.yandex.net/i?id=beec3f21a1160ae36c6ee2ac35f672a83af8e46d-10514561-images-thumbs&n=13',
//     'https://avatars.mds.yandex.net/i?id=752f7f514111e7770a3db2c3d869ccba82d14baf-9709143-images-thumbs&n=13',
    
//     'https://avatars.mds.yandex.net/i?id=ad91ad0a71bff56aa3de76a94fa07da1b78414c2-9290563-images-thumbs&n=13',
//     'https://avatars.mds.yandex.net/i?id=8b88929c5a3676987927dca0121082a3bd9bcb62-9459824-images-thumbs&n=13',
//     'https://avatars.mds.yandex.net/i?id=c24372b330528fcaf128ffd04905fc53db2a7a88-6849173-images-thumbs&n=13',
//     // 'https://avatars.mds.yandex.net/i?id=b1ad0bce1f8d679ac2d9e1e0a916772e50aad0b1-9459824-images-thumbs&n=13',
    
//   ]
selectedPic='';
playing:any;
@Input() pics:string[]=[];
@Output() selectEvent = new EventEmitter<any>();

showSelected(selectedPic: any){
  this.selectEvent.emit(selectedPic);
}

play(){
this.playing = setInterval(()=>{
    console.log("I run every 2 seconds indefinitely");
    }, 2000)
  }
  stop(){
    clearInterval(this.playing);
    }
  

  setSelectedItem(pic:string){
    console.log('picture selected: ',pic);
    this.selectedPic = pic;
    this.selectEvent.emit(this.selectedPic);
    for(let i=0; i<=this.pics.length; i++){
      if(this.pics[i] ===this.selectedPic){
        this.pics.splice(i,1);
        this.pics.unshift(this.selectedPic);
      }
    }
    }

  
    constructor(){
     // this.selectedPic = this.pics[0]

    }

    ngOnInit(): void {
     this.selectedPic = this.pics[0]
    }}

