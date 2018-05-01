import { Component, OnInit } from '@angular/core';
import { Problem } from '../../models/problem.model';
import { DataService } from '../../services/data/data.service';

const DEFAULT_PROBLEM: Problem = Object.freeze({
  id: 0,
  name: '',
  desc: '',
  difficulty: 'easy'
});
@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {
  newProblem: Problem = Object.assign({}, DEFAULT_PROBLEM);
  difficulties: string[] = ['easy', 'medium', 'hard', 'super'];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  addProblem(): void {
    this.dataService.addProblem(this.newProblem)
      .catch(error => console.log(error));
    this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
  }

}
