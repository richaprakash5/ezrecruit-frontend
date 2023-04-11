import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataInterfaceService } from '../data-interface.service';
import { Feedbackdetails } from '../feedbackdetails';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent {
  dataInterfaceService : DataInterfaceService;
   router: Router;
   feedback;
   route: ActivatedRoute;
   email;

   constructor(dataInterfaceService : DataInterfaceService,router: Router,route: ActivatedRoute){
     this.dataInterfaceService=dataInterfaceService;
     this.router=router;
     this.route=route;
   }


   ngOnInit(){
    this.email = this.route.snapshot.paramMap.get('emailid');

 
    this.dataInterfaceService.getFeedbackDetails(this.email).subscribe((response:Feedbackdetails) => { this.feedback = response });
      if(this.dataInterfaceService.getLoginStatus()==='N'){
        console.log(this.dataInterfaceService.getLoginStatus());
        this.router.navigate(['/']);        
      }
      
    }

}
