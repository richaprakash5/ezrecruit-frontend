import { Component } from '@angular/core';
import { DataInterfaceService } from '../data-interface.service';
import { Router} from '@angular/router';
import { Roster } from '../roster';
import { Addinterviewee } from '../addinterviewee';

@Component({
  selector: 'app-add-interviewee',
  templateUrl: './add-interviewee.component.html',
  styleUrls: ['./add-interviewee.component.css']
})
export class AddIntervieweeComponent {
[x: string]: any;
  dataInterfaceService : DataInterfaceService;
  router: Router
  candidate_details:any;
  output:any;
  now= new Date();

  constructor(dataInterfaceService : DataInterfaceService,router: Router){
    this.dataInterfaceService=dataInterfaceService;
    this.router=router;
  }
  candidate_name: any;
  position_title: any;
  candidate_emailid: any;
  total_experience: any;
  interviewer_name: any;
  interview_round: any;
  interview_date: any;
  interview_time: any;


  skills = new Set();
  interviewers = new Array();
  json;

 ngOnInit(){
  this.json={};
  if(this.dataInterfaceService.getLoginStatus()==='N'){
    console.log(this.dataInterfaceService.getLoginStatus());
    this.router.navigate(['/']);   
  }
  this.dataInterfaceService.getRoster().subscribe((response) => { for(let i = 0; i < response.length; i++) {
    this.skills.add(response[i].skill)
    if(this.json.hasOwnProperty(response[i].skill)){
      this.json[response[i].skill].push(response[i].username);
    }else{
      this.json[response[i].skill]= [response[i].username]; 
    }
                                }});


    this.position_title='Position Title';
    this.interview_round='Interview Round';
    this.interviewer_name='Interviewer Name';
   console.log(this.json); 

}
 postCandidate(){
  
  this.dataInterfaceService.addCandidate(this.candidate_details).subscribe({next:(response:Addinterviewee)=>{this.output=response.Status,alert(this.output)},
  error:(error)=>{alert(error.error.message)}
  });
  this.router.navigate(['/hr']);


 }
 getCurrentTime(){
  return this.now.getFullYear()+'-'+(this.now.getMonth()+1)+'-'+this.now.getDate()+' '+this.now.getHours()+':'+this.now.getMinutes()+':'+this.now.getSeconds();
 }
 onSubmit(){
  this.candidate_details={
    "name":this.candidate_name,
    "email":this.candidate_emailid,
    "position":this.position_title,
    "exp":this.total_experience,
    "lrc":this.interview_round,
    "intname":this.interviewer_name,
    "time":this.interview_date+' '+this.interview_time+':00',
    "createdby":"irefer",
    "createddate":this.getCurrentTime(),
    "updatedby":"irefer",
    "updateddate":this.getCurrentTime(),
    "intdetails":[
      {
    "int_name":this.interviewer_name,
    "round":this.interview_round,
    "name":this.candidate_name,
    "email":this.candidate_emailid,
    "time":this.interview_date+' '+this.interview_time+':00',
    "createdby":"irefer",
    "createddate":this.getCurrentTime(),
    "updatedby":"irefer",
    "updateddate":this.getCurrentTime(),
      }
      ]
  };
  console.log("int_name"+this.interviewer_name)
  console.log("round"+this.interview_round)
  console.log("name"+this.candidate_name)
  console.log("email"+this.candidate_emailid)
  console.log("time"+this.interview_date+' '+this.interview_time+':00')
  console.log("position"+this.position_title)
  console.log("exp"+this.total_experience)
  this.postCandidate();

 }
 isDisabled(){
  let value=0;
  if(this.position_title==='Position Title'||this.interview_round==='Interview Round'||this.interviewer_name==='Interviewer Name'||this.candidate_name===undefined||this.candidate_name===''||this.candidate_emailid===undefined||this.candidate_emailid===''||this.total_experience===undefined||this.total_experience===''||this.interview_date===undefined||this.interview_date===''||this.interview_time===undefined||this.interview_time===''){
    value=1;
  }
  return value;
 }

 getInterviewers(title){
  console.log(title);
  this.interviewers=this.json[title];
 }

}
