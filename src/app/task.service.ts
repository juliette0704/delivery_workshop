import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './models/task.model';

@Injectable()
export class TaskService {
  private apiUrl = 'https://example.com/tasks'; // Vrai URL quand j'aurais 

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(newTask: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, newTask);
  }

  updateTask(updatedTask: Task): Observable<Task> {
    const url = `${this.apiUrl}/${updatedTask.id}`;
    return this.http.put<Task>(url, updatedTask);
  }

  deleteTask(taskId: string): Observable<void> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.delete<void>(url);
  }
}
