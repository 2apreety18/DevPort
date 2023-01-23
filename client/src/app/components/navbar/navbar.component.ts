import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  profileUrl: string ='';
  userId: string | null='';

  constructor( private route : Router,private authService:AuthService,private activeRouter: ActivatedRoute){
    this.userId=this.authService.getId();
    this.profileUrl=`http://localhost:4200/web-view/${this.userId}`;
  }

  logout() {
    console.log("logout")
    localStorage.clear();
    this.route.navigate(['login']);
  }
  viewProfile(){
    this.route.navigate([`http://localhost:4200/web-view/${this.userId}`])

  }
}
