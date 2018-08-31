import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { NetworkProvider } from '../../providers/network/network';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  searchTerm: string = '';
  items: any;
  Symbol_List: {};
  showList: boolean;

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public renderer: Renderer,
    public network: NetworkProvider,
    public navParams: NavParams) {
    this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'my-popup', true);
    console.log('UserId', navParams.get('userId'));
    this.setFilteredItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
    this.setFilteredItems();
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  setFilteredItems() {

    if (this.searchTerm != '') {
      this.network.loadSymbolList(this.searchTerm).then(s => {
        //console.log(s);
        this.items = s;
        this.showList = true;
      }).catch(err => {
        console.log("err");
      })
    }
    else {
      this.showList = false;
    }

  }
}
