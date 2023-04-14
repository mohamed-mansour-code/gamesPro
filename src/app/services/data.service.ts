import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  header:any={
    headers:{
      'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
      'X-RapidAPI-Host':'free-to-play-games-database.p.rapidapi.com'
    }
  };

  constructor(private _HttpClient:HttpClient) { }

  getAll():Observable<any>
  {
    return this._HttpClient.get(environment.gameUrl+'s' , this.header)
  }


  getDetails(id:number):Observable<any>
  {
    return this._HttpClient.get(environment.gameUrl+'?id='+id , this.header)
  }


  getPlatforms(platformType:string):Observable<any>
  {
    return this._HttpClient.get(environment.gameUrl+'s?platform='+platformType , this.header)
  }


  getSortBy(sortBy:string):Observable<any>
  {
    return this._HttpClient.get(environment.gameUrl+'s?sort-by='+sortBy , this.header)
  }


  getCategories(categories:string):Observable<any>
  {
    return this._HttpClient.get(environment.gameUrl+'s?category='+categories , this.header)
  }


  
}
