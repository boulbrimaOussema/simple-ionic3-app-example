import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { HomePage } from '../home/home';

/**
 * Authenticate page.
 */
@Component({
    selector: 'page-authenticate',
    templateUrl: 'authenticate.html',
})
export class AuthenticatePage {
private user: any = {};
    /**
     * Constructor.
     *
     * @param navCtrl Navigation controller.
     * @param navParams Navigation params.
     * @param authenticateProvider Authenticate provider.
     */
    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    /**
     * Call authenticator.
     */
    public login(): void {
        if (this.user.username && this.user.password) {

             if (this.user.username=="root" && this.user.password =="root")
                        this.navCtrl.setRoot(HomePage);

        }
    }
}
