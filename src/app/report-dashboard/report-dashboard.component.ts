import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataInterfaceService } from '../data-interface.service';

@Component({
  selector: 'app-report-dashboard',
  templateUrl: './report-dashboard.component.html',
  styleUrls: ['./report-dashboard.component.css']
})
export class ReportDashboardComponent {

  dataInterfaceService : DataInterfaceService;
  router: Router;
  hrDashboard: any;
  dashboardLength: any;



  constructor(dataInterfaceService : DataInterfaceService,router: Router){
    this.dataInterfaceService=dataInterfaceService;
    this.router=router;

  }


  ngOnInit(){
      if(this.dataInterfaceService.getLoginStatus()==='N'){
        this.router.navigate(['/']);       
      }
      this.dataInterfaceService.getReportScreen().subscribe((response) => {this.hrDashboard = response,this.dashboardLength=response.length})
    }



}
