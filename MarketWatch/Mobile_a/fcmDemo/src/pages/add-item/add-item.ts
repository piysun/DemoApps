import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { NetworkProvider } from '../../providers/network/network';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  items: any;
  Symbol_List: {};
  showList: boolean;
  dataV: any;
  itemData = this.formBuilder.group({
    Symbol: [''],
    title: ['', Validators.required],
    description: [''],
  });

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public renderer: Renderer,
    private formBuilder: FormBuilder,
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
    console.log(this.itemData);
    let data = this.itemData;
    console.log(data.value);
    if (this.itemData.value.Symbol != '') {
      this.network.loadSymbolList(this.itemData.value.Symbol).then(s => {
        console.log("..........................",s);
        this.items = s;
        this.showList = true;
      }).catch(err => {
        console.log("err",err);
      })
    }
    else {
      this.showList = false;
    }

  }
  itemTapped(data) {
    console.log(data);
    this.itemData.value.Symbol = data;
    this.showList = false;
  }

  logForm() {
    console.log(this.itemData.value);
    this.network.addRecord(this.itemData.value).then(success => {
      console.log(success);
    })
  }
}
