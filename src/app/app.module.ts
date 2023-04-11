import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddIntervieweeComponent } from './add-interviewee/add-interviewee.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RosterComponent } from './roster/roster.component';
import { DashboardParentComponent } from './dashboard-parent/dashboard-parent.component';
import { InterviewerParentComponent } from './interviewer-parent/interviewer-parent.component';
import { HrParentComponent } from './hr-parent/hr-parent.component';
import { DataInterfaceService } from './data-interface.service';
import { ScheduleInterviewComponent } from './schedule-interview/schedule-interview.component';
import { ReportDashboardComponent } from './report-dashboard/report-dashboard.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';

const routes=[
  {path:'',component:LoginComponent},
  {path:'hr/addIntervieweeComponent',component:AddIntervieweeComponent},
  {path:'hr/getRoster',component:RosterComponent},
  {path:'hr',component:HrParentComponent},
  {path:'interviewer',component:InterviewerParentComponent},
  {path:'scheduleInterview',component:ScheduleInterviewComponent},
  {path:'hr/reports',component:ReportDashboardComponent},
  {path:'viewfeedback',component:ViewFeedbackComponent},
  {path:'**',redirectTo:'/'}
  
];
@NgModule({
  declarations: [
    AppComponent,
    AddIntervieweeComponent,
    LoginComponent,
    HeaderComponent,
    RosterComponent,
    DashboardParentComponent,
    InterviewerParentComponent,
    HrParentComponent,
    ScheduleInterviewComponent,
    ReportDashboardComponent,
    ViewFeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [DataInterfaceService],
  bootstrap: [AppComponent]
})

export class AppModule {}
