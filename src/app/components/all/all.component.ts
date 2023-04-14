import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {


  dataAll:any;
  dataAppear:any;
  sliceNumber:number = 12;
  sub:Subscription = new Subscription();

  constructor(private _DataService:DataService){}

  ngOnInit(){

    this.sub.add(
      this._DataService.getAll().subscribe({
        next:(response)=>{
          this.dataAll = response;
          this.dataAppear = this.dataAll.slice(0,12);
          
        }
      })
    )


  }

  more(){
    this.sliceNumber += 12;
    if(this.sliceNumber < this.dataAll.length){
      this.dataAppear = this.dataAll.slice(0 , this.sliceNumber);
    }else{
      this.dataAppear = this.dataAll;
    }
  };

  track( index:number , el:any){
    return el.id;
  }

  //========== life cycle destroy ==========
  ngOnDestroy(){
    this.sub.unsubscribe();
  }


}
