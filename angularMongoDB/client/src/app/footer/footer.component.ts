import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../Classes/Users';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  userDetail: Users = new Users();
  userId: String = '';
  ngOnInit(): void {
    this.userId=this.route.snapshot.params['userId'];
  }

  goToDashboard(){
    this.router.navigate(['dashboard/', this.userId]);
  }

  goToPersonalDetails(){
    this.router.navigate(['personalDetails/', this.userId]);
  }

  goToAboutUs(){
    this.router.navigate(['aboutus/', this.userId]);
  }
}
