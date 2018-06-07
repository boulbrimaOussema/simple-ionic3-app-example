import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {ModulePage} from "../module/module";

@Component({
  selector: 'page-sample-modal',
  templateUrl: 'sample-modal.html',

})
export class SampleModalPage {
  modul:any  = this.navParams.get('nm');
  desc:string = this.navParams.get('desc');
  credit:string = this.navParams.get('credit');
  weeks:any[]=this.navParams.get('weeks');


  constructor(public navParams: NavParams, public viewCtrl: ViewController,public navCtrl: NavController,) {}

  openListe(){
    this.navCtrl.setRoot(ModulePage,this.weeks);

  }

  // ...
}
