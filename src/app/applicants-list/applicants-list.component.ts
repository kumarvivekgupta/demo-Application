import { Component, OnInit } from "@angular/core";


export interface Task {
    name: string;
    completed: boolean;
    subtasks?: Task[];
  }

@Component({
    selector:'app-applicants-list',
    templateUrl:'./applicants-list.component.html',
    styleUrls:['./applicants-list.component.scss']
})

export class ApplicantsListComponent implements OnInit{


    skillList=["Angular","Nodejs"];
    task: Task = {
        name: 'Indeterminate',
        completed: false,
        subtasks: [
          {name: 'Primary', completed: false},
          {name: 'Accent', completed: false},
          {name: 'Warn', completed: false}
        ]
      };
      value="Clear me";

      arrayJobs=new Array(4);
    

    constructor(){}

    ngOnInit(){}

    searchApiCall(){
        console.log('Search Api call');
        alert('Api call');
        
    }
}