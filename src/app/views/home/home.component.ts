import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HeroService } from 'src/app/services/hero.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HeroService]
})
export class HomeComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;

  finder:string = "";
  serviceResponse:any = {};

  constructor(private heroService: HeroService,
              private router:Router) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  find(){
    this.heroService.getHeros(this.finder).subscribe(resp => {
      this.serviceResponse = resp;
    }, err => console.error(err)
    , () => {
      if(this.serviceResponse?.response === "success"){
        this.router.navigate(['responses'], {
          state:{
            data: this.serviceResponse
          }
        });
      }
    });
  }
}

