import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(res => console.log(res.id));

  }

  ngOnInit() {
  }

  takeback() {
    this.router.navigate(['']);
  }
}
