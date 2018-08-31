import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { NetworkProvider } from '../../providers/network/network';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  Symbol_List: {};

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public network: NetworkProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    
  }
  openModal() {

    let contactModal = this.modalCtrl.create('AddItemPage', { userId: 8675309 });
    contactModal.present();
  }

}
