import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import {TipsService} from '../../providers/tips-service'

import { SingleTipPage } from '../../pages/single-tip/single-tip';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
  providers:[TipsService],

})
export class Page2 {
  selectedItem: any;
  status:any;
  foodTips;
  activityTips;
  singleTipPage=SingleTipPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tipsService: TipsService) {
    this.status="start";
    this.loadTips();
  }

  toggleStatus(newStatus){
    if(this.status==newStatus){
      this.status="start"
    }else{
      this.status= newStatus;
    }
  }

  loadTips(){
    this.tipsService.load()
    .then(data=>{
      this.foodTips=data.food;
      this.activityTips=data.activities;
    })
  }

}
