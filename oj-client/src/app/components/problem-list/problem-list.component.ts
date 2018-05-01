import { Component, OnInit } from '@angular/core';
import { Problem } from '../../models/problem.model';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems: Problem[];
  constructor(private dataSerivce: DataService) { }

  // home work add unsubscribe in ngOnDestroy
  ngOnInit() {
    this.getProblems();
  }

  getProblems(): void {
    this.dataSerivce.getProblems()
      .subscribe(problems => this.problems = problems);
  }

}
