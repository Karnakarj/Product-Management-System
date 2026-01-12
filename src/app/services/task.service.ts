import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private storageKey = 'tasks';

  // Storage nundi tasks techukuntundi
  getTasks(): Task[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  private save(tasks: Task[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  addTask(task: Task): void {
    const tasks = this.getTasks();
    tasks.push(task);
    this.save(tasks);
  }

  updateTask(task: Task): void {
    const tasks = this.getTasks().map(t =>
      t.id === task.id ? task : t
    );
    this.save(tasks);
  }

  deleteTask(id: number): void {
    const tasks = this.getTasks().filter(t => t.id !== id);
    this.save(tasks);
  }
}
