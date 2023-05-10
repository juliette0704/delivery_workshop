import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'assets/tasks.json';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addTask(task: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, task);
  }

  updateTask(task: any): Observable<any> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<any>(url, task);
  }

  deleteTask(task: any): Observable<any> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<any>(url);
  }
}
