import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LinkService } from '../../services/link.service';
import { Link } from '../../models/link.interface';
import { LinkListService } from '../../services/link-list.service';
@Component({
  selector: 'linkaAdder-app',
  templateUrl: './input.compnent.html',
  styleUrls: ['./input.compoment.css']
})

export class LinksAdderComponent {

  editMode: boolean;
  @Output() submit: EventEmitter<any> = new EventEmitter();
  @Input() linkItem = {
    titleL: '',
    link: '',
    liked: false,
    id: ''
  };
  public links: Link[];

  constructor(private linkListService: LinkListService, private linkService: LinkService){}
  ngOnInit() {
    this.links = this.linkListService.getLinkList();
    this.getLinks();
  }
  getLinks(){
    this.linkService.getLinks().then(res => {this.links = res});
  }
  addLink(link): void {
    let newLink;
    if (link.link.startsWith('https://') || link.link.startsWith('http://')) {
      newLink = {
        titleL: link.titleL,
        link: link.link,
        liked: false,
        id: Math.random()*Date.now()
      }
    }else{
      newLink = {
        titleL: link.titleL,
        link:`http://${link.link}`,
        liked: false,
        id: Math.floor(Math.random()*10000)
      }
    }
    console.log(newLink);
    this.submit.emit(newLink);
  }
}