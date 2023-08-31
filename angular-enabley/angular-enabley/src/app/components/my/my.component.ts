import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss'],
})
export class MyComponent implements OnInit {
  myWorks:string[]=[
    
    'https://cdna.artstation.com/p/assets/images/images/024/035/132/large/stacey-steshin-3.jpg?1581100157',
    'https://cdnb.artstation.com/p/assets/images/images/024/131/565/large/stacey-steshin-nas-diplom12.jpg?1581423122',
    'https://cdna.artstation.com/p/assets/images/images/038/507/084/large/stacey-steshin-2.jpg?1623271923',
   
    'https://cdnb.artstation.com/p/assets/images/images/038/506/995/large/stacey-steshin-.jpg?1623271607',
    'https://cdna.artstation.com/p/assets/images/images/038/506/800/large/stacey-steshin-silanjsv4l4.jpg?1623271334',
    'https://cdna.artstation.com/p/assets/images/images/038/506/140/large/stacey-steshin-defende-knopka.jpg?1623270122',
    
    'https://cdna.artstation.com/p/assets/images/images/027/191/840/large/stacey-steshin-tai4000-3-3.jpg?1590846915',
    'https://cdnb.artstation.com/p/assets/images/images/023/820/253/large/stacey-steshin-.jpg?1580431154',
    'https://cdna.artstation.com/p/assets/images/images/025/313/148/large/stacey-steshin-nas-zvet.jpg?1585397021',  
  ]

  picsHere:string[]=[
    'https://avatars.mds.yandex.net/i?id=c37b357bfba59e8522aa0df676a8cac883b019e9-9138034-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=1e32010dbc7e64206fd1815af13d43248e68affd-10415038-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=cbfa5fdb5f046af0d57ab43efd494ae806239307-10414807-images-thumbs&n=13',
   
    'https://avatars.mds.yandex.net/i?id=983adaeb2375d8e913b813fe7a45339eeb27d92c-8311400-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=beec3f21a1160ae36c6ee2ac35f672a83af8e46d-10514561-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=752f7f514111e7770a3db2c3d869ccba82d14baf-9709143-images-thumbs&n=13',
    
    'https://avatars.mds.yandex.net/i?id=ad91ad0a71bff56aa3de76a94fa07da1b78414c2-9290563-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=8b88929c5a3676987927dca0121082a3bd9bcb62-9459824-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=c24372b330528fcaf128ffd04905fc53db2a7a88-6849173-images-thumbs&n=13',  
  ]

  searchWord = '';
  isBusy = false;
  results: string[] = [];
  searchTitle='search';
  selectedItemMyComponent='';
  selectedFromGallery =""
  constructor() {}

  ngOnInit(): void {}

  search(){
    this.results = [];
    this.isBusy = true;
    setTimeout(()=>{
      this.results = this.doSearch();
      this.selectedItemMyComponent=this.results[2];
      this.isBusy = false;
    },3000)
  }
getSelectedFromGallery(item:any){
  console.log(item)
  this.selectedFromGallery = item;
}

  setSelectedFromAppResult(item:string){
    if(!item.includes('6')){
      this.selectedItemMyComponent = item;
    }
  }


  setSelectedFromAppGalery(pic:string){
      this.selectedItemMyComponent = pic;
  }


private doSearch(): string[]{
  let arr = [];
  for (let i=0; i<10; i++){
    arr.push(this.searchWord + ' ' + i);
  }
  return arr;
}

}



