import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observer } from 'rxjs/internal/types';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {

  finder:string = "";
  serviceResponse:any = {};

  @Input('childToMaster') masterName:string = "";
  @Output() childToParent = new EventEmitter<String>();

  constructor(private heroService:HeroService,
              private router:Router) { }

  ngOnInit(): void {
  }

  find(){
    this.heroService.getHeros(this.finder).subscribe(resp => {
      console.log(resp);
      this.serviceResponse = resp;
    }, err => console.error(err)
    , () => {
      if(this.serviceResponse?.response === "success"){
        if(this.router.url === "/response"){
          this.sendToParent(this.serviceResponse);
        }else{
          this.router.navigate(['responses'], {
            state:{
              data: this.serviceResponse
            }
          });
        }
      }
    });
  }

  sendToParent(info:any){
    this.childToParent.emit(info);
  }
}
