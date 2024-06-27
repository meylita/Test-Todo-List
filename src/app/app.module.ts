import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from "@angular/common/http";
import { TodoService } from './service/todo.service';
import { FormsModule } from '@angular/forms';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { ContactService } from './service/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ContactManagerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TodoService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
