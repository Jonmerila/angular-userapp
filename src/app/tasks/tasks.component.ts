import { Component, Input } from "@angular/core";
import { TaskComponent } from "./task/task.component";



@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [TaskComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})

export class TasksComponent{
    @Input({required: true}) name?: string;
    tasks = [
        {
            id: "t1",
            userId: "u1",
            title: "Master Angular",
            summary: "Learn to become good enough on Angular",
            dueDate: "2025-12-31",
        }
    ]
}