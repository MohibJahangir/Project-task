import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { EmployeesComponent } from './employees/employees.component';
import { NewEmployeeComponent } from './employees/new-employee/new-employee.component';
import { ReaddataComponent } from './employees/readdata/readdata.component';
import { PrintDataComponent } from './print-data/print-data.component';
const routes: Routes = [
  {
    path:'',component:NewEmployeeComponent
  },

  {
    path:"showdata",component:PrintDataComponent
  },
{
  path:"main",component:NewEmployeeComponent
},


  // {path:'' , redirectTo:'/home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
