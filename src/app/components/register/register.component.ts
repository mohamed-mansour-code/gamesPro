import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  ErrorMessage!:string;
  isLoad:boolean = false;
  sub:Subscription = new Subscription();

  constructor(private _AuthService:AuthService , private _Router:Router){}

  registerForm:FormGroup = new FormGroup({
    first_name: new FormControl(null,[Validators.required , Validators.pattern(/^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/)]),
    last_name: new FormControl(null,[Validators.required , Validators.pattern(/^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/)]),
    email: new FormControl(null,[Validators.required , Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)]),
    age: new FormControl(null,[Validators.required , Validators.pattern(/^([1-7][0-9]|80)$/)]),
    password: new FormControl(null,[Validators.required , Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
  });


  submit(registerForm:FormGroup){
    this.isLoad = true;
    this.sub.add(
      this._AuthService.signUp(registerForm.value).subscribe({
        next:(response)=>{
          if(response.message == 'success'){
            this._Router.navigate(['/form/Login']);
            this.isLoad = false;
          }else{
            this.ErrorMessage = response.message;
            this.isLoad = false;
          } 
        }
      })
    )

  }

  ngOnDestoy(){
    this.sub.unsubscribe();
  }



}
