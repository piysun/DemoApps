import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireAuth } from 'angularfire2/auth';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
// import { Router } from "@angular/router";

import { Observable } from 'rxjs/Observable';
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
  user: Observable<firebase.User>;

  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private gplus: GooglePlus,
    private platform: Platform,
    public navParams: NavParams) {
    this.user = this.afAuth.authState;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }
  Login() {
    console.log("Login G");
    // this.googlePlus.login({})
    //   .then(res => console.log("resP", res))
    //   .catch(err => console.error("err", err));

    // signInWithGoogle() {
    // this._firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    // .then((user) => { console.log(user); });
    // this.navCtrl.setRoot(HomePage);

    // this._firebaseAuth.auth().onAuthStateChanged(user => {
    //   console.log("user", user);
    // });
    this.googleLogin();

  }
  googleLogin() {
    if (this.platform.is('cordova')) {
      this.nativeGoogleLogin();
    } else {
      this.webGoogleLogin();
    }
  }

  signOut() {
    this.afAuth.auth.signOut();
  }
  async nativeGoogleLogin(): Promise<any> {
    try {

      const gplusUser = await this.gplus.login({
        'webClientId': '55845666138-c9pvbv0ibocnsa872v0cgrslo6agrj13.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      }).then(res => {
        console.log("res->>", res);
      })

      // return await this.afAuth.auth.signInWithCredential
      // return await this.afAuth.auth.signInWithCredential(
      //   firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)
      // )

    } catch (err) {
      console.log(err)
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);

    } catch (err) {
      console.log(err)
    }

  }
}
