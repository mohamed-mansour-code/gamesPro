import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  

  dataHome:any;
  sub:Subscription = new Subscription();

  constructor(private _DataService:DataService){}

  ngOnInit(){

    this.sub.add(
      this._DataService.getAll().subscribe({
        next:(response)=>{
          this.dataHome = response;          
        }
      })
    )


  }


  //========== life cycle destroy ==========
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
