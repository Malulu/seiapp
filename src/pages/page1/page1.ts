import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {FrasiService} from '../../providers/frasi-service'

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers:[FrasiService]
})
export class Page1 {
  frasi: string[];
  date: string;
  dateN: number;
  dayOfWeek;

  constructor(public navCtrl: NavController, public frasiService: FrasiService) {
    this.frasi=[];
    this.loadFrasi();

    var secondDate = new Date();
    var onejan = new Date(secondDate.getFullYear(),0,1);
    var diffDays = Math.round(Math.abs((onejan.getTime() - secondDate.getTime()) / (86400000)));

    this.dayOfWeek=secondDate.getDay();
    this.date = secondDate.toDateString();
    this.dateN = diffDays;

  }

  loadFrasi(){
    this.frasiService.load()
    .then(data=>{
      this.frasi=data.frasi;
    })
  }

}
