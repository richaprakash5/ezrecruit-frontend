import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from './config';
import { Roster } from './roster';

@Injectable({
  providedIn: 'root'
})
export class DataInterfaceService {
  configUrl = 'assets/config.json';
  url='http://localhost:8080/api/roster';
  
  httpclient:HttpClient ;
  constructor(httpclient:HttpClient) { 
    this.httpclient=httpclient;
  }
  private isLogin='N';

  onLogOut(){
    this.isLogin='N';
  }

  onLogIn(){
    this.isLogin='Y';
  }

  getLoginStatus(){
    return this.isLogin;
  }


  getRoster() {
    return this.httpclient.get<any>(this.url);
  }

  getLogin(input: any){
    return this.httpclient.post<any>('http://localhost:8080/api/login',input);

  }

  addCandidate(candidate_details){
    return this.httpclient.post<any>('http://localhost:8080/addCandidate',candidate_details);

  }

  getHrScreen(){
    return this.httpclient.get<any>('http://localhost:8080/hrScreenActive');
  }

  scheduleInterview(schedule){
    return this.httpclient.post<any>('http://localhost:8080/scheduleInterview',schedule);
  }

  decideProfile(decision){
    return this.httpclient.post<any>('http://localhost:8080/acceptProfile',decision);
  }

  getInterviewerScreen(interviewer_name){
    return this.httpclient.get<any>('http://localhost:8080/interviewerScreen/'+interviewer_name);
  }
  acceptInterview(status){
    return this.httpclient.post<any>('http://localhost:8080/acceptInterview',status);
  }
  shareFeedback(feedback){
    return this.httpclient.post<any>('http://localhost:8080/shareInterviewerFeedback',feedback);
  }
  getReportScreen(){
    return this.httpclient.get<any>('http://localhost:8080/hrScreen');
  }
  getFeedbackDetails(emailid){
    return this.httpclient.get<any>('http://localhost:8080/feedback/'+emailid);
  }
  getprofile(username){
    return this.httpclient.get<any>('http://localhost:8080/api/profile/'+username);
  }



}
