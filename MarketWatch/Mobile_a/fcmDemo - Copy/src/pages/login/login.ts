import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireAuth } from 'angularfire2/auth';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
// import { Router } from "@angular/router";
import * as firebase from 'firebase/app';
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
  private user: Observable<firebase.User>;

  constructor(public navCtrl: NavController,
    // private googlePlus: GooglePlus,
    private _firebaseAuth: AngularFireAuth,
    private storage: Storage,
    // private router: Router,
    public navParams: NavParams) {
    
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

  }
}
