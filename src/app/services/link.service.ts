import { Injectable } from '@angular/core';
import { Link } from '../models/link.interface';
// import { LINKS } from '../components/links/links.component';

@Injectable()
export class LinkService  { 
  private linksArr: Link[];
  constructor(){
    this.linksArr = [
      { titleL: 'habrahabr', link: 'https://habrahabr.ru/', liked: false, id: 1 },
      { titleL: 'facebook', link: 'https://www.facebook.com/', liked: false, id: 2 },
      { titleL: 'w3school', link: 'https://www.w3schools.com', liked: false, id: 3 },
      { titleL: 'angular', link: 'https://angular.io/', liked: false, id: 4 },
      { titleL: 'github', link: 'https://github.com/', liked: false, id: 5 },
    ];
  }
  getLinks(): Promise<Link[]> {
    return Promise.resolve(this.linksArr);
  }

  getLink(id: number, titleL): Promise<Link> {
    return this.getLinks()
               .then(links => links.find(
                 link => link.id === id,
                 link => link.titleL === titleL
                ));
  }

}
