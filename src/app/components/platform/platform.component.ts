import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent {


  dataPlatforms:any;
  dataAppear:any;
  platformName!:any;
  sliceNumber:number = 12;
  sub:Subscription = new Subscription();

  constructor(private _DataService:DataService,private _ActivatedRoute:ActivatedRoute){}

  ngOnInit(){

    this.sub.add(
      this._ActivatedRoute.paramMap.subscribe((x)=>{
        this.platformName = x;
        this._DataService.getPlatforms(this.platformName.params.platform).subscribe({
          next:(response)=>{
            this.dataPlatforms = response;
            this.dataAppear = this.dataPlatforms.slice(0,12);
            
          }})})
    );



  }

  more(){
    this.sliceNumber += 12;
    if(this.sliceNumber < this.dataPlatforms.length){
      this.dataAppear = this.dataPlatforms.slice(0 , this.sliceNumber);
    }else{
      this.dataAppear = this.dataPlatforms;
    }
  };

  track( index:number , el:any){
    return el.id;
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }


}
