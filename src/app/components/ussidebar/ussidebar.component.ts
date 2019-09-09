import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'profile', title: 'User list',  icon:'ni-single-02 text-yellow', class: '' },
    { path: 'available-shelves', title: 'Avalable Shelves',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: 'booking-history', title: 'Booking History',  icon: 'ni-tv-2 text-primary', class: '' }
];

@Component({
  selector: 'app-ussidebar',
  templateUrl: './ussidebar.component.html',
  styleUrls: ['./ussidebar.component.scss']
})
export class UssidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

}
