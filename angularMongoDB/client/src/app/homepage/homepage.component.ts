import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../Classes/Users';
import { UserDataService } from '../Services/user-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserDataService) { }

  userDetail: Users = new Users();

  ngOnInit(): void {
  }

  OnFileSelected(event: any) {
    const reader = new FileReader();
    console.log(event);
    const [file] = event.target.files;
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.userDetail.photo = reader.result as string;
      console.log(this.userDetail.photo);
    };
  }

  addUserToDatabase(userDetail: Users) {
    userDetail.isLoggedIn = false;
    this.userService.postUserDataAPI(userDetail).subscribe(data => { this.userDetail = data });
    console.log(userDetail);
    alert("You've successfully registered yourself on AngularCRUD!")
    this.router.navigate(['login']);
  }

}
