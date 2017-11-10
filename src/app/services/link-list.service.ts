import { Injectable } from '@angular/core';
import { LinkListStoregeService } from './link-list-storege.service';
import { Http, Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class LinkListService {

  private linkList = [
    { titleL: 'habrahabr', link: 'https://habrahabr.ru/', liked: false, id: 1 },
    { titleL: 'facebook', link: 'https://www.facebook.com/', liked: false, id: 2 },
    { titleL: 'w3school', link: 'https://www.w3schools.com', liked: false, id: 3 },
    { titleL: 'angular', link: 'https://angular.io/', liked: false, id: 4 },
    { titleL: 'github', link: 'https://github.com/', liked: false, id: 5 },
  ];

  constructor(private storage: LinkListStoregeService, public http: Http) { }


  public get(url): Observable<any> {
    return this.http.get(url);
  };

  public getInfo () {
   return this.get('https://jsonplaceholder.typicode.com/posts')
          .map((res:Response) => res).subscribe(el => {});
  } 

  getLinkList() {
    return this.storage.get();
  }
  addItem(item) {
    return this.storage.post(item);
  }
  removeItem(item) {
    return this.storage.destroy(item);
  }
  updateItem(selectedLink, event) {
    return this.storage.put(selectedLink, event);
  }
  likeItem(item, classN) {
    console.log(item);
    console.log(classN);
    return this.storage.like(item, classN);
  }
}