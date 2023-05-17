import { Component, OnInit } from '@angular/core';
import { Task } from './models/task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  tasks: Task[] = [];
  newTask: Task = { title: '', description: '', completed: false };
  updatedTask: Task = { title: '', description: '', completed: false };
  newTaskTitle: string = '';
  newTaskDescription: string = '';
  updatedTaskId: number = 0;
  updatedTaskTitle: string = '';
  updatedTaskDescription: string = '';
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask(newTask: Task): void {
    this.taskService.addTask(newTask).subscribe(task => {
      this.tasks.push(task);
      this.newTask = { title: '', description: '', completed: false };
    });
  }

  updateTask(updatedTask: Task): void {
    this.taskService.updateTask(updatedTask).subscribe(task => {
      const index = this.tasks.findIndex(t => t.id === task.id);
      if (index !== -1) {
        this.tasks[index] = task;
      }
    });
  }

  deleteTask(taskId: number | undefined): void {
    if (taskId) {
      const taskIdString = taskId.toString();
      this.taskService.deleteTask(taskIdString).subscribe(() => {
        this.tasks = this.tasks.filter(t => t.id !== taskId);
      });
    }
  }
}
