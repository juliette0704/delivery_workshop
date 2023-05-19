import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: any[] = [];
  newTask : string = "";

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getAllTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

  addTask() {
    const task = { title: this.newTask };
    this.taskService.addTask(task)
      .subscribe(() => {
        this.newTask = '';
        this.getTasks();
      });
  }

  updateTask(task: any) {
    this.taskService.updateTask(task)
      .subscribe(() => {
        this.getTasks();
      });
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe({
      next: () => {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
      },
      error: error => {
        console.error('Error deleting task:', error);
      }
    });
  }
}

