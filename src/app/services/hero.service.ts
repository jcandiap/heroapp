import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService{

  baseUrl = '/api/10227273835695111';

  constructor(private http: HttpClient){
  }

  getHeros(param:string):Observable<any>{
    return this.http.get(`${ this.baseUrl }/search/${ param }`);
  }

}
