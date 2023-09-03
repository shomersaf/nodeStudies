import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IGUnit } from 'src/app/models/gallery-unit.model';
@Component({
  selector: 'app-gallery-units',
  templateUrl: './gallery-units.component.html',
  styleUrls: ['./gallery-units.component.scss']
})
export class GalleryUnitsComponent implements OnInit{
  visible = false;
  selectedPic!:IGUnit;
  playing:any;
  i=0;
  @Input() pics!:IGUnit[];
  @Output() selectEvent = new EventEmitter<any>();
  
  showSelected(selectedPic: any){
    this.selectEvent.emit(selectedPic);
  }
  
  play(){
        this.playing = setInterval(()=>{
         this.selectedPic = this.pics[this.i]; 
            if(this.pics[this.i]) {
              this.pics.splice(this.i,1);
            this.i++;}else{
             this.selectedPic = this.pics[this.i-1]; 
              this.pics.splice(this.i-1,1);
          } 
          this.pics.unshift(this.selectedPic);
        }, 1000)
    }
  
  
    stop(){
      clearInterval(this.playing);
      }
    
    setSelectedItem(pic:IGUnit){
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
    
      constructor(){  }
  
      ngOnInit(): void {
       this.selectedPic = this.pics[0]
      }}
  