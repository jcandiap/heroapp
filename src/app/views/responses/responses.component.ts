import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css']
})
export class ResponsesComponent implements OnInit {

  data:any = {};

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.data = navigation?.extras?.state?.data;
  }

  ngOnInit(): void {
    if(!this.data){
      this.router.navigate(['/']);
    }
  }

  childToParent(name:any){
    this.data = name;
  }

  openProfile(id:string){
    this.router.navigate(['profile', id]);
  }
}
