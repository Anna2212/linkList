import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { LinkService } from '../../services/link.service';
import { Link } from '../../models/link.interface';


@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.css']
})
export class SeeMoreComponent implements OnInit {
  @Input() link: Link;
  public links: any;
  constructor(
    private linkService: LinkService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.linkService.getLink(+params.get('id'), params.get('titleL')))
      .subscribe(link => this.link = link);
    this.getLinks();
  }
  goBack(): void {
    this.location.back();
  }
  getLinks(){
    this.linkService.getLinks().then(res => {this.links = res});
  }
}