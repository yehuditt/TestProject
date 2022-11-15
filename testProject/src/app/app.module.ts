import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcessManagementLayoutComponent } from './process-management-layout/process-management-layout.component';
import { ProcessInfoComponent } from './process-management-layout/process-info/process-info.component';
import { ContactsComponent } from './process-management-layout/contacts/contacts.component';
import { ContactsListComponent } from './process-management-layout/contacts-list/contacts-list.component';
import { FormsModule } from '@angular/forms';
import { InsuerdDetailsComponent } from './process-management-layout/process-info/insuerd-details/insuerd-details.component';
import { ProcessFormComponent } from './process-management-layout/process-info/process-form/process-form.component';
import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProcessManagementLayoutComponent,
    ProcessInfoComponent,
    ContactsComponent,
    ContactsListComponent,
    InsuerdDetailsComponent,
    ProcessFormComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
