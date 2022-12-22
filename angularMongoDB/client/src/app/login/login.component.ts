import { Component, OnInit } from '@angular/core';
import { Users } from '../Classes/Users';
import { LogUser } from '../Classes/logUser';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../Services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserDataService) { }

  userDatabase: Users[] = [];
  userId: String = '';
  loginDetail: LogUser = new LogUser();
  jsonStringObj: any;

  ngOnInit(): void {
    this.userService.getUserDatabaseAPI().subscribe(data => { this.userDatabase = data })
  }

  loginUser() {
    let flag = 0;
    for (var i of this.userDatabase) {
      if (i.email == this.loginDetail.email && i.password == this.loginDetail.password) {
        i.isLoggedIn = true;
        sessionStorage.setItem("user", JSON.stringify(i));
        this.jsonStringObj = sessionStorage.getItem('user');
        var obj = JSON.parse(this.jsonStringObj);
        console.log(obj._id);
        this.userId=obj._id;
        this.userService.updateIsLoggedInStatusAPI(this.userId, obj).subscribe(data =>{})
        console.log(i);
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      alert("Incorrect Authentication")
    }
    if (flag == 1) {
      alert("You've logged in successfully")
      this.router.navigate(['dashboard/', this.userId]);
    }
  }

}
