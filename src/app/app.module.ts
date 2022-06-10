import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { EmployeesComponent } from './employees/employees.component';
import { NewEmployeeComponent } from './employees/new-employee/new-employee.component';
import { NewEmployeeService } from './shared/new-employee.service';
///import {MatGridListModule} from '@angular/material/grid-list';
//import{BrowserAnimationModule} from '@angular/platform-browser/animations'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReaddataComponent } from './employees/readdata/readdata.component';
import { AngularFireModule } from '@angular/fire/compat';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
//import { GetdataComponent } from './employees/new-employee/getdata/getdata.component';
import { environment } from 'src/environments/environment';
import { PrintDataComponent } from './print-data/print-data.component';


@NgModule({
  declarations: [
    AppComponent,
   NewEmployeeComponent,
   ReaddataComponent,
   PrintDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    
  ],
  providers: [NewEmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { } 