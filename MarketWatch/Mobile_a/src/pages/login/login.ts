import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { Storage } from '@ionic/storage';
import { NetworkProvider } from '../../providers/network/network';
import { timeout } from 'rxjs/operators';
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
  addUser: any = {};
  constructor(public navCtrl: NavController,
    private googlePlus: GooglePlus,
    private storage: Storage,
    private network: NetworkProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  Login() {
    this.googlePlus.login({}).then(res => {
      this.network.getUserDetails(res.email).then(success => {
        console.log("0000", success);
        if (success) {
          this.getAllRecord();
        }
        else {
          
            this.storage.set('email', res.email);
            this.storage.set('Fname', res.displayName);
            this.storage.set('Image', res.imageUrl);

            this.addUser.user_Name = res.displayName;
            this.addUser.user_Email = res.email;
            this.network.addUserDetails(this.addUser).then(Result => { }).catch(err => { })
            this.navCtrl.setRoot('HomePage');

        }
      }).catch(err => {

      });
    });
  }

  addUserD() {

  }
  getAllRecord() {

  }
}

  //})
  //     .catch(err => console.error(err));
  // }
  // let email = { "user_Email": "sweetrook@gmail.com" };
  // this.network.getUserDetails(email).then(success => {
  //   console.log("0000", success);
  //   if (true) {

  //   }
  //   else {
  //     this.storage.set('email', res.email);
  //     this.storage.set('Fname', res.displayName);
  //     this.storage.set('Image', res.imageUrl);
  //     this.navCtrl.setRoot('HomePage');
  //   }

  // }).catch(err => {

  // });
  //   this.googlePlus.login({})
  //     .then(res => {
  //       console.log(res);
  //       this.storage.set('email', res.email);
  //       this.storage.set('Fname', res.displayName);
  //       this.storage.set('Image', res.imageUrl);
  //       this.navCtrl.setRoot('HomePage');
  //       this.network.getUserDetails(res.email).then(success => {

  //       }).catch(err => {

  //       });
  //     })
  //     .catch(err => console.error(err));
  // }


