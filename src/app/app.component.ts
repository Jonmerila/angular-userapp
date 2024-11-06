import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;

  onSelectUser(id:string){
    console.log("Select user with id", id);
  }
}
