import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkProvider {
  baseUrl: string = "https://www.nseindia.com/live_market/dynaContent/live_watch/stock_watch/foSecStockWatch.json";
  devices: any = [];
  resultArry: any = [];
  data: any = [];
  items: { title: string; }[];

  constructor(public http: HttpClient,

  ) {
    console.log('Hello NetworkProvider Provider');
  }

  getAllDevices() {

    // let headersObj = new HttpHeaders();
    // headersObj.append('Content-Type', 'application/json');
    // let url = this.baseUrl;
    // return new Promise((resolve, reject) => {
    //   this.http.get(url).map(data => {
    //     var Listarry = [];
    //     data.data.forEach(element => {
    //       Listarry.push(element.symbol);
    //     });
    //     resolve(Listarry);
    //   }).subscribe(resp => {
    //     resolve();
    //   }), (err) => {
    //     console.log("--------------------/", err);

    //   }
    // });
  }

  loadSymbolList(searchTerm) {
    return new Promise((resolve, reject) => {
      this.http.get('assets/data/symbolList.json').map(data => {
        // console.log('data--->', data);
        this.data = data;
        console.log('searchTerm', searchTerm);
        var datas = this.data.filter((location) => {
          return location.SYMBOL.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });

        resolve(datas);
      }).subscribe(resp => {

      }), (err) => {
        console.log("--------------------/", err);

      }
    });
  }
}