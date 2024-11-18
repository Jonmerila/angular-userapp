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

  selectedUserId = "u1";
  
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
    // Adding ! to the end tells typescript that we will always be returning one user
  }

  onSelectUser(id:string){
    this.selectedUserId = id;
  }
}
