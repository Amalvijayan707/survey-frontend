import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './employee/create/create.component';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
  {path:'', component:EmployeeComponent},
  {path:'create', component:CreateComponent},
  {path:'edit/:id', component:CreateComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
