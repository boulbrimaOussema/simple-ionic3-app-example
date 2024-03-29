import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import {AuthenticatePage} from "../pages/authenticate/authenticate";

/**
 * Application.
 */
@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage:any = AuthenticatePage;

    /**
     * Constructor.
     *
     * @param platform Platform.
     * @param statusBar Status bar.
     * @param splashScreen Splash screen.
     */
    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
}

