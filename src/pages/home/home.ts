import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import {SampleModalPage} from "../modal/modal";

/**
 * Home page extending require authentication page.
 */
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
  modules:any[];
  /**
   * Constructor.
   *
   * @param navCtrl Navigation controller.
   * @param navParams Navigation params.
   * @param authenticateProvider Authenticate provider.
   */
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  this.modules = [{name:"IAM",desc:"aevkznvkrzverbvjbvbdbvidsvbydsbvbdsbvdbskvjdsbvkdnvkndsvn",credit:5,nm:"applications mobiles",color:"#34b5ef",weeks:[{date: "11 FEB - 12FEB",title:"CHAPITRE 1 : Introduction a android",cours1:"Cours 1 (slide)",cours2:"Cours 1 (video explicatife"},{date: "18 FEB - 25FEB",title:"CHAPITRE 2 : android studio",cours1:"Cours 2 (slide)",cours2:"Cours 2 (video explicatife"},{date: "03 MAR - 10MAR",title:"CHAPITRE 3 : Introduction a android",cours1:"Cours 3 (slide)",cours2:"Cours 3 (video explicatife"},{date: "11 FEB - 12FEB",title:"CHAPITRE 1 : Introduction a android",cours1:"Cours 1 (slide)",cours2:"Cours 1 (video explicatife"}]},
    {name:"SI",desc:"aevkznvkrzverbvjbvbdbvidsvbydsbvbdsbvdbskvjdsbvkdnvkndsvn",credit:5,nm:"systemes intellegents",color:"#ef41c0",weeks:[{date: "11 FEB - 12FEB",title:"CHAPITRE 1 : Introduction a android",cours1:"Cours 1 (slide)",cours2:"Cours 1 (video explicatife"},{date: "18 FEB - 25FEB",title:"CHAPITRE 2 : android studio",cours1:"Cours 2 (slide)",cours2:"Cours 2 (video explicatife"},{date: "03 MAR - 10MAR",title:"CHAPITRE 3 : Introduction a android",cours1:"Cours 3 (slide)",cours2:"Cours 3 (video explicatife"},{date: "11 FEB - 12FEB",title:"CHAPITRE 1 : Introduction a android",cours1:"Cours 1 (slide)",cours2:"Cours 1 (video explicatife"}]},
    {name:"PARA",desc:"aevkznvkrzverbvjbvbdbvidsvbydsbvbdsbvdbskvjdsbvkdnvkndsvn",credit:5,nm:"paradigmes de programmation",color:"#753b52",weeks:[{date: "11 FEB - 12FEB",title:"CHAPITRE 1 : Introduction a android",cours1:"Cours 1 (slide)",cours2:"Cours 1 (video explicatife"},{date: "18 FEB - 25FEB",title:"CHAPITRE 2 : android studio",cours1:"Cours 2 (slide)",cours2:"Cours 2 (video explicatife"},{date: "03 MAR - 10MAR",title:"CHAPITRE 3 : Introduction a android",cours1:"Cours 3 (slide)",cours2:"Cours 3 (video explicatife"},{date: "11 FEB - 12FEB",title:"CHAPITRE 1 : Introduction a android",cours1:"Cours 1 (slide)",cours2:"Cours 1 (video explicatife"}]},
    {name:"COMP",desc:"aevkznvkrzverbvjbvbdbvidsvbydsbvbdsbvdbskvjdsbvkdnvkndsvn",credit:5,nm:"compilation",color:"#2b3f68",weeks:[{date: "11 FEB - 12FEB",title:"CHAPITRE 1 : Introduction a android",cours1:"Cours 1 (slide)",cours2:"Cours 1 (video explicatife"},{date: "18 FEB - 25FEB",title:"CHAPITRE 2 : android studio",cours1:"Cours 2 (slide)",cours2:"Cours 2 (video explicatife"},{date: "03 MAR - 10MAR",title:"CHAPITRE 3 : Introduction a android",cours1:"Cours 3 (slide)",cours2:"Cours 3 (video explicatife"},{date: "11 FEB - 12FEB",title:"CHAPITRE 1 : Introduction a android",cours1:"Cours 1 (slide)",cours2:"Cours 1 (video explicatife"}]},
    {name:"RO",desc:"aevkznvkrzverbvjbvbdbvidsvbydsbvbdsbvdbskvjdsbvkdnvkndsvn",credit:5,nm:"recherche operationnel",color:"#606820",weeks:[{date: "11 FEB - 12FEB",title:"CHAPITRE 1 : Introduction a android",cours1:"Cours 1 (slide)",cours2:"Cours 1 (video explicatife"},{date: "18 FEB - 25FEB",title:"CHAPITRE 2 : android studio",cours1:"Cours 2 (slide)",cours2:"Cours 2 (video explicatife"},{date: "03 MAR - 10MAR",title:"CHAPITRE 3 : Introduction a android",cours1:"Cours 3 (slide)",cours2:"Cours 3 (video explicatife"},{date: "11 FEB - 12FEB",title:"CHAPITRE 1 : Introduction a android",cours1:"Cours 1 (slide)",cours2:"Cours 1 (video explicatife"}]},
  ]
  }

  openModal(modul) {
    let myModal = this.modalCtrl.create(SampleModalPage,modul);
    myModal.present();
  }
}
