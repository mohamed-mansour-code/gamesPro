import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllComponent } from './components/all/all.component';
import { PlatformComponent } from './components/platform/platform.component';
import { SortByComponent } from './components/sort-by/sort-by.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AuthGuard } from './gaurd/auth.guard';
import { DetailsComponent } from './components/details/details.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotAuthGuard } from './gaurd/not-auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home' , canActivate:[AuthGuard] , component:HomeComponent},
  {path:'All' , canActivate:[AuthGuard] , component:AllComponent},
  {path:'Platforms/:platform' , canActivate:[AuthGuard] , component:PlatformComponent},
  {path:'Sort-by/:sort' , canActivate:[AuthGuard] , component:SortByComponent},
  {path:'Categories/:categories' , canActivate:[AuthGuard] , component:CategoriesComponent},
  {path:'Details/:id' , canActivate:[AuthGuard] , component:DetailsComponent},
  {path:'Register' , canActivate:[NotAuthGuard] , component:RegisterComponent},
  {path:'Login' , canActivate:[NotAuthGuard] , component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
