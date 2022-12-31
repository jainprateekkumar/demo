import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './users/add-user/add-user.component';
import { DisplayUserComponent } from './users/display-user/display-user.component';

const routes: Routes = [
  { path: '', component: DisplayUserComponent },
  { path: 'adduser', component: AddUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
