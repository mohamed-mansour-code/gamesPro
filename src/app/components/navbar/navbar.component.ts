import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  islogin:boolean = false;
  sub:Subscription = new Subscription();

  constructor(private _AuthService:AuthService , private _Router:Router){}

  //========= life cycle on init =========
  ngOnInit(){

    this.sub.add(
          this._AuthService.tokenPermission.subscribe((x)=>{
              if(x != null){
                this.islogin = true;
              }else{
                this.islogin = false;
              }
        })
    )


  }

  //========= life cycle on destroy =========
  ngOnDestroy(){
    this.sub.unsubscribe();
  }


  logOut(){
    localStorage.removeItem('MoviesToken');
    this._Router.navigate(['/Login']);
    this._AuthService.tokenPermission.next(null)
  }




  
}
