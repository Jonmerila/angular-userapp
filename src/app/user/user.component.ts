import { Component, Input, input, Output, output, computed, EventEmitter ,signal } from '@angular/core';
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
  @Input({required: true}) id!:string;
  @Input({required: true}) avatar!: string ;
  @Input({required: true}) name!: string ;

  // @output properties
  //we name this output select because we are selecting a user to output info from, in this case, tasks.
  //Unlike input, the select property here will be assigned a initial value ( Event emitter )
  //Event emitter will allow to emit custom values to any parent component that is intrested.
  @Output() select = new EventEmitter();

  //You can alternatively make a output function instead:
  //output function is relatively new, whereas the @Output decorator is the old version.
  // select = output<string>();


  //writing input.required() tells angular that some value will be set on the variables
  //these signals are read-only signals, they can't be changed after the input has got it's value

  /* One way to make inputs and get imgPath using signals
  avatar = input.required<string>();
  name = input.required<string>();
  imgPath = computed(() => {
    return 'assets/users/' + this.avatar();
  })
    */
  
  get imgPath(){
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {
    //Emit the value from here
    //Access the mitted data by using $event in your html file.
    this.select.emit(this.id);
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
