import { Component } from "@angular/core";

@Component({
    selector: "app-header",
    standalone: true, // This marks this comp as a standalone. Set standalone to false and you will get a module component.
    templateUrl: "./header.component.html",   //wants a string of relative path to the file that contains the markup for this component
    styleUrl: "./header.component.css",
})


export class HeaderComponent {}