import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent{

    dataDetails:any;
    sub:Subscription = new Subscription();

  constructor(private _ActivatedRoute:ActivatedRoute,private _DataService:DataService , private _Renderer2:Renderer2){}

  ngOnInit(){

    this.sub.add(
      this._DataService.getDetails(this._ActivatedRoute.snapshot.params['id']).subscribe({
        next:(response)=>{
          this.dataDetails = response;
        }
      })
    );



  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }


  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  
  @ViewChild('videoPlayer') el!:ElementRef<HTMLVideoElement>;
  enter(){
    this._Renderer2.removeClass(this.el.nativeElement,'d-none');
    this.el.nativeElement.play();

    
  }

  

  leave(){
    this._Renderer2.addClass(this.el.nativeElement,'d-none');
    this.el.nativeElement.pause();
  }

}
