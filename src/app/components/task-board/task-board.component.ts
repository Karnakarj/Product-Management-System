import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [CommonModule, TaskCardComponent],
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.css'
})
export class TaskBoardComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask(): void {
    this.taskService.addTask({
      id: Date.now(),
      title: 'New Task',
      description: 'Task description',
      status: 'todo'
    });
    this.refresh();
  }

  update(task: Task): void {
    this.taskService.updateTask(task);
    this.refresh();
  }

  remove(id: number): void {
    this.taskService.deleteTask(id);
    this.refresh();
  }

  getByStatus(status: Task['status']): Task[] {
    return this.tasks.filter(t => t.status === status);
  }

  private refresh(): void {
    this.tasks = this.taskService.getTasks();
  }
}
