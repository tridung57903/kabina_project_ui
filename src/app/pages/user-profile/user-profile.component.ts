import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public userList: any;
  // public currentUser: User;
  public userModel: any;
  config: any;
  public configModal: any;
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getAccounts();
    
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
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
