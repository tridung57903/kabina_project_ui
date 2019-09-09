import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList: any;
  config: any;
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getAccounts();
    this.config = {
      itemsPerPage: 5,
      currentPage: 1
    };
  }

  getAccounts() {
    this._userService.getUserList().subscribe(
      data => {
        this.userList = data;
      },
      err => {
        alert(err);
      });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
