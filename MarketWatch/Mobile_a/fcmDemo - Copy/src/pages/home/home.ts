import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { NetworkProvider } from '../../providers/network/network';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Firebase } from '@ionic-native/firebase';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  Symbol_List: {};
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public network: NetworkProvider,
    private firebase: Firebase,
    private database: AngularFireDatabase,
    private DB: AngularFireDatabase,
    public navParams: NavParams) {
    this.itemsRef = this.database.list('/marketWatch');
    // this.marketWatch = this.database.list('/marketWatch');
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  ionViewDidLoad() {
    this.getToken();
    console.log('ionViewDidLoad HomePage');
    this.DB.list('/marketWatch')
      .valueChanges().subscribe((datas) => {
        console.log("datas", datas)
      }, (err) => {
        console.log("probleme : ", err)
      });
  }
  openModal() {
    let contactModal = this.modalCtrl.create('AddItemPage', { userId: 8675309 });
    contactModal.present();
  }

  getToken() {
    console.log("getToken");
    this.firebase.getToken()
      .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
      .catch(error => console.error('Error getting token', error));
      console.log('1--');
    this.firebase.onTokenRefresh()
      .subscribe((token: string) => console.log(`Got a new token ${token}`));
  }
}
