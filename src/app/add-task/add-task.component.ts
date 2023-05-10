import { Component } from '@angular/core';
import { TaskService } from '../task.service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent {
  newTask: any = {};

  constructor(private taskService: TaskService) { }

  addTask() {
    this.taskService.addTask(this.newTask).subscribe(() => {
      // Réinitialiser les champs de saisie
      this.newTask = {};
      // Effectuer d'autres actions après l'ajout de la tâche si nécessaire
    });
  }
}
