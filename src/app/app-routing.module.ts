import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [{
  path:"",
  component:LoginComponent
},
{
  path:"home/:username",
  component:HomeComponent
},
{
  path:"result/:username/:id",
  component:ResultComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
