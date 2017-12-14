import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  city: string;
  code: string;

  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams) {
   

    this.storage.get('location').then((val)=>{
      if(val != null){
        let location = JSON.parse(val);
        this.city = location.city;
        this.code = location.code;
      } else {
         this.city = 'Miami';
         this.code = 'FL';
      }
    });
  }

  saveForm(){
    let location = {
      city: this.city,
      code: this.code
    }
    console.log(location);
    
    // convert the object retrieved form the form to a string for storage

    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
}
