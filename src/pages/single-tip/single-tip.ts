import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

/*
  Generated class for the SingleTipPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-single-tip',
  templateUrl: 'single-tip.html'
})

export class SingleTipPage {
title;
description;

  constructor(public navCtrl: NavController, public params: NavParams) {
    console.log(this.params.data);
     this.title=this.params.data.name;
     this.description=this.params.data.sentence;
  }

}
