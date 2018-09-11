import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TagContentType } from '@angular/compiler';

/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkProvider {
  baseUrl: string = "https://www.nseindia.com/live_market/dynaContent/live_watch/stock_watch/foSecStockWatch.json";
  baseApiUrl: string = "http://localhost:3000/api/";
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

  getUserDetails(email) {
    // responce will be UserId
    console.log(email);
    let headersObj = new HttpHeaders();
    headersObj.append('Content-Type', 'application/json');

    let url = this.baseApiUrl;
    return new Promise((resolve, reject) => {
      this.http.post(url + 'checkUserdetails', email).map(data => {
        // console.log(data);
        resolve(data);
      }).subscribe(resp => {
        resolve();
      }), (err) => {
        console.log("--------------------/", err);

      }
    });

  }


  addUserDetails(Obj) {
    console.log(Obj);
    let headersObj = new HttpHeaders();
    headersObj.append('Content-Type', 'application/json');

    let url = this.baseApiUrl;
    return new Promise((resolve, reject) => {
      this.http.post(url + 'insert_UserDetails', Obj).map(data => {
        // console.log(data);
        resolve(data);
      }).subscribe(resp => {
        resolve();
      }), (err) => {
        console.log("--------------------/", err);

      }
    });
  }
}



// var a = function () {
//   var deferred = new defer(); //promise declaration
//   if (!error) {
//     deferred.resolve(value);
//   } else {
//     deferred.reject(error);
//   }
//   return deferred.promise;
// }
// var b = function () {
//   var deferred = new defer(); //promise declaration
//   if (!error) {
//     deferred.resolve(value);
//   } else {
//     deferred.reject(error);
//   }
//   return deferred.promise;
// }

// app.post(‘/api/v1 / <api_name>’, async function (request, response) {
//   try {
//     var responseOfA = await a();
//     var responseOfB = await b();
//   } catch (error) {
//   }
// });

// //--------------------------------------------
// var triggerObject = [{ "symbol": "tcs", "trigger": 1000, "targetHit": false }, { "symbol": "infy", "trigger": 700, "targetHit": true }];
// var nseData = [{ "symbol": "tcs", currentRate: 1000 }, { "symbol": "infy", currentRate: 680 }, { "symbol": "pcj", currentRate: 100 }];

// triggerObject.forEach(function (triggerObj, index) {

//   if (!triggerObj.targetHit) {

//     var result = _.filter(nseData, function (obj) {

//       if (triggerObj.symbol == obj.symbol && obj.currentRate >= triggerObj.trigger) {

//         return obj;

//       } //end of if condition

//     }); //end of lodash filter

//     //for checking if trigger is hit

//     if (result.length > 0) {

//       //remove object from triggerObject

//       triggerObject[index].targetHit = true;
//       //send mail for trigger hit
//     }

//   } //end of triggerObj.targetHit checking if condition

// }); //end of forEach loop

