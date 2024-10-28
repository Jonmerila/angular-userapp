import { Component, Input, computed ,signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  //Using @Input on avatar marks avatar as "setable" outside.
  //typescript feature, if you write ! after a variable, we tell ts that 
  //we definetly know that it will be set to some value even though ts can't see it
  @Input({required: true}) avatar!: string ;
  @Input({required: true}) name!: string ;

  get imgPath(){
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {

  }
}
// export class UserComponent {
//   //Use signal to update the UI if the value is changed.
//   selectedUser = signal(DUMMY_USERS[randomIndex])
//   //This is how you would get imgPath for example when using signal
//   // If you would write syntax like: imgPath = 'assets/users/' + this.selectedUser().avatar;,
//   // you'd only get the imgPath once. The computed(() => ) property? listens to any change and 
//   // updates imgPath with the new value if dependecies is changed.
//   imgPath = computed(() => 'assets/users/' + this.selectedUser().avatar);
//   // get imgPath() {
//   //   // You access properties within a class using this.
//   //   return 'assets/users/' + this.selectedUser.avatar
//   // }

//   onSelectUser() {
//     console.log("Clicked");
//     const newRandomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     //Update selectedUser with a new user using set
//     this.selectedUser.set(DUMMY_USERS[newRandomIndex]);
//   }

//   get userName() {
//     return this.selectedUser.name;
//   }

// }
