import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Link } from '../../models/link.interface';
// import { AppComponent } from '../../app.component';
import { LinkListService } from '../../services/link-list.service';
import { MoveDirective } from '../../directives/move.directive';
import { LinkService } from '../../services/link.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LinkListStoregeService } from '../../services/link-list-storege.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  // [x: string]: any;
  @Input() linkItem: any;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  public links: Link[];
  public editMode: boolean;
  public liked: boolean;
  constructor(
    private linkListService: LinkListService,
    private linkService: LinkService,
    private route: ActivatedRoute,
    private router: Router
    
  ) { 
    this.editMode = false;
    this.liked = false;
  }
  

  ngOnInit() {
    this.links = this.linkListService.getLinkList();
  }

  selectedLink: Link;

  onSelect(link: Link): void {
    this.selectedLink = link;
    this.editMode = true
  }

  addLink(link: any) {
    this.links = this.linkListService.addItem(link);
  }
  updateLink(selectedLink, event) {
    console.log(this.links);
    this.links = this.linkListService.updateItem(selectedLink, event);
    this.editMode = false;
  }
  removeItem(item) {
    this.links = this.linkListService.removeItem(item);
  }

  toggle_class(link) {
    this.liked = true;
  }
  gotoDetail(link): void {
    this.router.navigate(['/details', link.id, link.titleL]);
  }
//   public get (url): Observable<any> {
//     return this.http.get(url);
// };
  getinfo(){
    this.linkListService.getInfo();
  }
}
