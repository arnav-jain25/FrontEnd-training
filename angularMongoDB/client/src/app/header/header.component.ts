import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../Classes/Users';
import { UserDataService } from '../Services/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserDataService) { }

  userDetail: Users = new Users();
  userId: String = '';
  jsonStringObj: any;

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.userService.getUserDataByIdAPI(this.userId).subscribe(data => { this.userDetail = data });
  }

  goToDashboard() {
    this.router.navigate(['dashboard/', this.userId]);
  }

  goToPersonalDetails() {
    this.router.navigate(['personalDetails/', this.userId]);
  }

  // ---------------------deleting the account from database by calling a function from user service----------------
  removeAccount() {
    let choice = prompt("Are you sure you want to delete your account? (y/n)")
    if (choice == 'y') {
      this.userService.deleteUserDataByIdAPI(this.userId).subscribe(data =>{});
      sessionStorage.removeItem('user')
      this.router.navigate(['/']);
    }
  }

  goToAboutUs() {
    this.router.navigate(['aboutus/', this.userId]);
  }

  logoutUser() {
    let ch = prompt("Are you sure you want to logout? (y/n)")
    if (ch == 'y') {
      this.jsonStringObj = sessionStorage.getItem('user');
      var obj = JSON.parse(this.jsonStringObj);
      obj.isLoggedIn=false;
      console.log(obj);
      this.userId = obj._id;
      this.userService.updateIsLoggedInStatusAPI(this.userId, obj).subscribe(data => { })
      sessionStorage.removeItem('user')
      this.router.navigate(['/']);
    }
  }

}
