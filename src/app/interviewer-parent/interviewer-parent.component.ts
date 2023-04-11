import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataInterfaceService } from '../data-interface.service';
import { InterviewAccept } from '../interview-accept';
import { InterviewFeedback } from '../interview-feedback';
import { Userprofile } from '../userprofile';

@Component({
  selector: 'app-interviewer-parent',
  templateUrl: './interviewer-parent.component.html',
  styleUrls: ['./interviewer-parent.component.css']
})
export class InterviewerParentComponent {
  route: ActivatedRoute;
  router: Router;
  dataInterfaceService : DataInterfaceService;
  interviewer_name;
  feedback='Overall Interview Feedback';
  interviewDetails;
  errorvalue;
  interviewAccept;
  interviewFeedbackJson;

  coding_skills;
  skills_based_on_yoe;
  decision_making;
  client_handling;
  team_management;
  articulate_ability;
  solution_approach;
  remarks;
  
  profile;
  username;
  role;
  emailId;
  last_login;

  constructor(dataInterfaceService : DataInterfaceService,router: Router,route: ActivatedRoute){
    this.dataInterfaceService=dataInterfaceService;
    this.router=router;
    this.route=route;
  }
  ngOnInit(){
    if(this.dataInterfaceService.getLoginStatus()==='N'){
      console.log(this.dataInterfaceService.getLoginStatus());
      this.router.navigate(['/']);
      
    }

    this.interviewer_name = this.route.snapshot.paramMap.get('interviewer_name');
    this.dataInterfaceService.getprofile(this.interviewer_name).subscribe((response:Userprofile)=>{this.username=response.username;this.role=response.role;this.emailId=response.emailId;this.last_login=response.last_login})

    this.dataInterfaceService.getInterviewerScreen(this.interviewer_name).subscribe({next:(response)=>{this.interviewDetails = response},
    error:(error)=>{this.errorvalue=error.status}
   
    
  })
  }
    onLogOut(){
      this.dataInterfaceService.onLogOut();
      this.router.navigate(['/']);
    }
    acceptInterview(interviewStatus,interviewId){
      this.interviewAccept={
        "interviewID":interviewId,
        "acceptStatus":interviewStatus
      }

      this.dataInterfaceService.acceptInterview(this.interviewAccept).subscribe((response:InterviewAccept)=>{alert(response.message),this.ngOnInit()});

    }
    shareFeedback(interviewId){
      this.interviewFeedbackJson=
      {
        "interviewID":interviewId,
        "coding_skills":this.coding_skills,
        "skills_based_on_yoe":this.skills_based_on_yoe,
        "decision_making":this.decision_making,
        "client_handling":this.client_handling,
        "team_management":this.team_management,
        "articulate_ability":this.articulate_ability,
        "solution_approach":this.solution_approach,
        "remarks":this.remarks,
        "acceptStatus":this.feedback
        }
      this.dataInterfaceService.shareFeedback(this.interviewFeedbackJson).subscribe({next:(response:InterviewFeedback)=>{alert('Feedback Provided Successfully'),this.ngOnInit()},
        
        error:(error)=>{var obj = 'Invalid fields ';for(let i = 0; i < error.error.errors.length; i++) {
          obj = obj + error.error.errors[i].field+', ';
      
    
      }    obj=obj.substring(0,obj.length-2);   alert(obj)}
    
        })
      this.feedback='Overall Interview Feedback';
      this.coding_skills=null;
      this.skills_based_on_yoe=null;
      this.decision_making=null;
      this.client_handling=null;
      this.team_management=null;
      this.articulate_ability=null;
      this.solution_approach=null;
      this.remarks=null;
    }

    getId(j){
      var id='a'+j;
      console.log('for index'+j+' '+id)
      return id;
      
    }

}


