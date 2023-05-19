import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addTask(task: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, task);
  }

  updateTask(task: any): Observable<any> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<any>(url, task);
  }

  deleteTask(taskId: number): Observable<any> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.delete<any>(url);
  }
}
