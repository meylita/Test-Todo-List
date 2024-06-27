import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent
  },
  {
    path: 'contact',
    component: ContactManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
