import { Component, OnInit } from '@angular/core';
import { IGUnit } from 'src/app/models/gallery-unit.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  myPics:IGUnit[]=[
    {
      image: "https://i.pinimg.com/originals/3d/17/4e/3d174e6bf1d7dffbb4a34f516a12b8c3.jpg",
      name: "Eilat",
      date: "1987",
      description: "Our Hotel"
    },
    {
      image: "https://static.tildacdn.com/tild6162-3762-4935-b332-363466613930/Sochi_Park.jpg",
      name: "Sochi",
      date: "2022",
      description: "Our Hotel"
    },
    {
      image: "https://24warez.ru/uploads/posts/070915/292615/6.jpg",
      name: "Antalya",
      date: "1982",
      description: "Waterfalls"
    },
    {
      image: "http://1.bp.blogspot.com/-XpYvWTbAMk4/VGxgdUeZl3I/AAAAAAAANiM/Fqmep0SSC_g/s1600/Аристотеля-16.JPG",
      name: "Thessaloniki",
      date: "1999",
      description: "Aristotel Square"
    },
    {
      image: "https://celes.club/uploads/posts/2022-05/1651879256_62-celes-club-p-vladivostok-tsentr-goroda-krasivo-foto-64.jpg",
      name: "Vladivostok",
      date: "2023",
      description: "City Center"
    },
    {
      image: "https://postila.ru/data/0b/99/07/5c/0b99075c2f778f0593c1ee17af31b455509b1b16ad5c2677dec57e004a379b0e.jpg",
      name: "St Petersburg",
      date: "2021",
      description: "Peterhof"
    }
  ]
  
minutes!:number;
birthdate!:Date;
res:any;
ngOnInit(): void {
  this.minutes = 156;
  this.birthdate = new Date("May 8,1972 11:20:00");
}
}
