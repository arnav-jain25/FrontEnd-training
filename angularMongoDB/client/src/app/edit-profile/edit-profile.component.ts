import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../Classes/Users';
import { UserDataService } from '../Services/user-data.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserDataService) { }

  userDetail: Users = new Users();
  userId: String = '';

  ngOnInit(): void {
    this.userId=this.route.snapshot.params['userId'];
    this.userService.getUserDataByIdAPI(this.userId).subscribe(data => { this.userDetail = data })
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

  updateUserData(userDetail: Users) {
    this.userService.putUserDataByIdAPI(this.userId, userDetail).subscribe(data =>{this.userDetail=data})
    this.router.navigate(['personalDetails', this.userId]);
  }

}
