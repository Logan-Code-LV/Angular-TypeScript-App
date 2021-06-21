import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'
import { TASKS } from '../../mock-tasks'
import { Task } from '../../Task'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }
  deleteTask(task: Task) {
    let updatedTasks = this.tasks.filter(t => t.id !== task.id)
    return this.tasks = updatedTasks
  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder
  }
  addTask(task: Task) {
    TASKS.push(task)

  }
}
