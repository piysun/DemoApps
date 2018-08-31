import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
    private googlePlus: GooglePlus,
    private storage: Storage,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  Login() {
    this.googlePlus.login({})
      .then(res => {
        console.log(res);
        this.storage.set('email', res.email);
        this.storage.set('Fname', res.displayName);
        this.storage.set('Image', res.imageUrl);
        this.navCtrl.setRoot('HomePage');
      })
      .catch(err => console.error(err));
  }
}
