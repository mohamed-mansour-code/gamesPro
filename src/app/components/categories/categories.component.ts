import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {


  dataCategories:any;
  dataAppear:any;
  categoriesName!:any;
  sliceNumber:number = 12;
    sub:Subscription = new Subscription();

  constructor(private _DataService:DataService,private _ActivatedRoute:ActivatedRoute){}

  ngOnInit(){

    this.sub.add(
      this._ActivatedRoute.paramMap.subscribe((x)=>{
        this.categoriesName = x;
        this._DataService.getCategories(this.categoriesName.params.categories).subscribe({
          next:(response)=>{
            this.dataCategories = response;
            this.dataAppear = this.dataCategories.slice(0,12); 
            console.log(this.dataCategories);
            console.log(this.dataAppear);
          }})})
    )



  }

  more(){
    this.sliceNumber += 12;
    if(this.sliceNumber < this.dataCategories.length){
      this.dataAppear = this.dataCategories.slice(0 , this.sliceNumber);
    }else{
      this.dataAppear = this.dataCategories;
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
