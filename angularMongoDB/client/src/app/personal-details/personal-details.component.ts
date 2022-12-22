import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../Classes/Users';
import { UserDataService } from '../Services/user-data.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router, private userService: UserDataService) { }

  userDetail: Users=new Users();
  userId: String= '';

  ngOnInit(): void {
    this.userId=this.route.snapshot.params['userId'];
    this.userService.getUserDataByIdAPI(this.userId).subscribe(data =>{this.userDetail=data})
  }

  goToEditProfile(){
    this.router.navigate(['edit-profile/', this.userId]);
  }

}
