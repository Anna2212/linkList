import { Injectable } from '@angular/core';
const storageName = 'aah_link_list';
const defaultList = [
  { titleL: 'habrahabr', link: 'https://habrahabr.ru/', liked: false, id: 1 },
  { titleL: 'facebook', link: 'https://www.facebook.com/', liked: false, id: 2 },
  { titleL: 'w3school', link: 'https://www.w3schools.com', liked: false, id: 3 },
  { titleL: 'angular', link: 'https://angular.io/', liked: false, id: 4 },
  { titleL: 'github', link: 'https://github.com/', liked: false, id: 5 },
];
@Injectable()
export class LinkListStoregeService {
  private linkList;
  constructor() {
    this.linkList = JSON.parse(localStorage.getItem(storageName)) || defaultList;
  }
  /**
   * get items
   * @returns {any[]}
   */
  get() {
    return [...this.linkList];
  }
  /**
    * Add a new todo item
    * @param item
    * @returns {any[]}
    */

  /**
  * Syncronize the local storage with the current list
  * @returns {any[]}
  */
  update() {
    localStorage.setItem(storageName, JSON.stringify(this.linkList));

    return this.get();
  }
  /**
   * Add a new todo item
   * @param item
   * @returns {any[]}
   */
  post(item) {
    this.linkList.push(item);
    return this.update();
  }
  /**
     * find the index of an item in the aray
     * @param item
     * @returns {number}
     */
  private findItemIndex(item) {
    return this.linkList.indexOf(item);
  }

  /**
   * Update an existing item
   * @param item
   * @param changes
   * @returns {any[]}
   */
  put(item, changes) {
    Object.assign(this.linkList[this.findItemIndex(item)], changes);
    return this.update();
  }

  // remove an item
  destroy(item) {
    this.linkList.splice(this.linkList.indexOf(item), 1);
    return this.update();
  }
  like(item, classN){
    console.log(item);
    console.log(classN)
    this.linkList.item.classList.toggle(classN);
    return this.update();
  }
}
