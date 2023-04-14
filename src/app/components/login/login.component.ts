import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  ErrorMessage!:string;
  isLoad:boolean = false;
  sub:Subscription = new Subscription();

  constructor(private _AuthService:AuthService , private _Router:Router){}

  loginForm:FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.required , Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)]),
    password: new FormControl(null,[Validators.required , Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
  });


  submit(loginForm:FormGroup){
    this.isLoad = true;
    this.sub.add(
      this._AuthService.signIn(loginForm.value).subscribe({
        next:(response)=>{
          if(response.message == 'success'){
            this._Router.navigate(['/Home']);
            localStorage.setItem('MoviesToken' , response.token);
            this._AuthService.getToken();
            this.isLoad = false;
          }else{
            this.ErrorMessage = response.message;
            this.isLoad = false;
          }
          
        }
      })
    );

  }


  //========== life cycle destroy ==========
  ngOnDestroy(){
    this.sub.unsubscribe();
  }




}
