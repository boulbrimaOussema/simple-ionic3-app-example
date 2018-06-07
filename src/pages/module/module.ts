import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Home page extending require authentication page.
 */
@Component({
  selector: 'module',
  templateUrl: 'module.html'
})
export class ModulePage {
  modules:any = this.navParams.data;
  /**
   * Constructor.
   *
   * @param navCtrl Navigation controller.
   * @param navParams Navigation params.
   * @param authenticateProvider Authenticate provider.
   */
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


}
