import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { OAuth, DataService } from 'forcejs';

/*
  Generated class for the ContactsServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ContactsServiceProvider {

  constructor(){//public http: Http) {
    console.log('Hello ContactsServiceProvider Provider');
  }

  loadContacts(){
    let oauth = OAuth.createInstance();

    return oauth.login()
      .then(oauthResult => {
        let service = DataService.createInstance(oauthResult);

        return service.query('SELECT Id, Name FROM Contact LIMIT 50');

      });
  }

}
