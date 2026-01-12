import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {

  @Input() task!: Task;
  @Output() update = new EventEmitter<Task>();
  @Output() remove = new EventEmitter<number>();

  onTitleBlur(e: any): void {
    this.task.title = e.target.innerText;
    this.update.emit(this.task);
  }

  onDescBlur(e: any): void {
    this.task.description = e.target.innerText;
    this.update.emit(this.task);
  }

  onStatusChange(e: any): void {
    this.task.status = e.target.value;
    this.update.emit(this.task);
  }

  deleteTask(): void {
    this.remove.emit(this.task.id);
  }
}
