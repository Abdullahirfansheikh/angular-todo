import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.css'
})
export class AllTasksComponent {
  newTask=""
  constructor(private httpService:ServiceService){}
  addTask(){
    this.httpService.addTask(this.newTask).subscribe(()=>{
      this.newTask=""
    })
  }
}
