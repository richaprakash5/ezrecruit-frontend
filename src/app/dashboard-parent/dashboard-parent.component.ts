import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DataInterfaceService } from '../data-interface.service';
import { Profile } from '../profile';
@Component({
  selector: 'app-dashboard-parent',
  templateUrl: './dashboard-parent.component.html',
  styleUrls: ['./dashboard-parent.component.css']
})
export class DashboardParentComponent {
  hrDashboard : any;
  router: Router
  dataInterfaceService : DataInterfaceService;
  dashboardLength:any;
  constructor(dataInterfaceService : DataInterfaceService,router: Router){
    this.dataInterfaceService=dataInterfaceService;
    this.router=router;

  }

  profile;


  ngOnInit(){
    this.dataInterfaceService.getHrScreen().subscribe((response) => {this.hrDashboard = response,this.dashboardLength=response.length})


    
  }
  routeScheduler(interviewee: any){

    this.router.navigate(['/scheduleInterview',{id : interviewee.interviewee_id,name : interviewee.interviewee_name, emailid : interviewee.email, 
                                                pos : interviewee.position_title,exp : interviewee.total_experience
                                      
    }]);


  }

  decideProfile(profileStatus,num){
    const d=profileStatus==='Y' ?'Accepted' : 'Rejected';
    this.profile={
      "interviewID": num,
			"acceptStatus":d
    }
    this.dataInterfaceService.decideProfile(this.profile).subscribe((response:Profile)=>{alert('Profile '+response.message),this.ngOnInit();});


  }

  viewFeedback(email){
    this.router.navigate(['/viewfeedback',{emailid : email
}]);

  }





}
