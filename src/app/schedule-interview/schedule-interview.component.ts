import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataInterfaceService } from '../data-interface.service';
import { Scheduler } from '../scheduler';

@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.css']
})
export class ScheduleInterviewComponent {
  router: Router
  dataInterfaceService : DataInterfaceService;
  route: ActivatedRoute;
  constructor(dataInterfaceService : DataInterfaceService,router: Router,route: ActivatedRoute){
    this.dataInterfaceService=dataInterfaceService;
    this.router=router;
    this.route=route;
  }
  interviewee_id: any;
  candidate_name: any;
  position_title: any;
  candidate_emailid: any;
  total_experience: any;

  interviewer_name: any;
  interview_round: any;
  interview_date: any;
  interview_time: any;

  now= new Date();
  result:any;

  skills = new Set();
  interviewers = new Array();
  scheduler: any;
  json;

  ngOnInit(){
    this.json={};
    if(this.dataInterfaceService.getLoginStatus()==='N'){
      console.log(this.dataInterfaceService.getLoginStatus());
      this.router.navigate(['/']);
      
    }
    this.candidate_name = this.route.snapshot.paramMap.get('name');
    this.interviewee_id = this.route.snapshot.paramMap.get('id');
    this.candidate_emailid = this.route.snapshot.paramMap.get('emailid');
    this.position_title = this.route.snapshot.paramMap.get('pos');
    this.total_experience = this.route.snapshot.paramMap.get('exp');
    this.interview_round = this.route.snapshot.paramMap.get('round');



    this.interview_round='Interview Round';
    this.interviewer_name='Interviewer Name';

    this.dataInterfaceService.getRoster().subscribe((response) => { for(let i = 0; i < response.length; i++) { 
      if(response[i].skill===this.position_title){
        this.interviewers.push(response[i].username);
      }}                                 });

  }
  getCurrentTime(){
    return this.now.getFullYear()+'-'+(this.now.getMonth()+1)+'-'+this.now.getDate()+' '+this.now.getHours()+':'+this.now.getMinutes()+':'+this.now.getSeconds();
   }

  onSubmit(){
    this.scheduler={
      "id" : this.interviewee_id,
      "name" : this.candidate_name,
      "email" : this.candidate_emailid,
      "position" : this.position_title,
      "exp" : this.total_experience,
      "intname" : this.interviewer_name, 
      "lrc" : this.interview_round,
      "time" : this.interview_date+' '+this.interview_time+':00',
      "createdby" : "irefer",
      "createddate" : this.getCurrentTime(),
      "updatedby" : "irefer",
      "updateddate" : this.getCurrentTime(),
      "intdetails" : [
      {
          "int_name" : this.interviewer_name,
          "round" : this.interview_round,
          "name" : this.candidate_name,
          "email":this.candidate_emailid,
          "time" : this.interview_date+' '+this.interview_time+':00',
          "createdby" : "irefer",
          "createddate" : this.getCurrentTime(),
          "updatedby" : "irefer",
          "updateddate" : this.getCurrentTime()
      }]

    }
    this.dataInterfaceService.scheduleInterview(this.scheduler).subscribe({next:(response:Scheduler)=>{this.result=response.Status,alert(this.result),this.router.navigate(['/hr']);},
    error:(error)=>{alert(error.error.message)}
  });

    
    
  }
  


}

