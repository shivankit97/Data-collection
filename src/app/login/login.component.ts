import { Component, OnInit } from '@angular/core';
import { and } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
})
export class LoginComponent implements OnInit {

  emailText: string = '';
  passwordtext: string = '';
  regemail: string ='shivankit';
  regpassword: string ='123';
  status: string ='';
  constructor(private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit() {
    
  }

  logging()  {
    if(this.regemail==this.emailText && this.regpassword==this.passwordtext) {
      this.status= 'successfully login';
      this.router.navigate(["dashboard"]);
    }
    else
     this.status= 'wrong credentials';
  }
}
