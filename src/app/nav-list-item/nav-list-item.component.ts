import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-list-item',
  templateUrl: './nav-list-item.component.html',
  styleUrls: ['./nav-list-item.component.scss']
})
export class NavListItemComponent implements OnInit {

  @Input() link: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
