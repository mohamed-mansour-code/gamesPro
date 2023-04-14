import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.css']
})
export class SortByComponent {

  dataSort:any;
  dataAppear:any;
  sortName!:any;
  sliceNumber:number = 12;
  sub:Subscription = new Subscription();

  constructor(private _DataService:DataService,private _ActivatedRoute:ActivatedRoute){}

  ngOnInit(){

    this.sub.add(
    this._ActivatedRoute.paramMap.subscribe((x)=>{
      this.sortName = x;
      this._DataService.getSortBy(this.sortName.params.sort).subscribe({
        next:(response)=>{
          this.dataSort = response;
          this.dataAppear = this.dataSort.slice(0,12);
          
        }})})
    );

  }

  more(){
    this.sliceNumber += 12;
    if(this.sliceNumber < this.dataSort.length){
      this.dataAppear = this.dataSort.slice(0 , this.sliceNumber);
    }else{
      this.dataAppear = this.dataSort;
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
