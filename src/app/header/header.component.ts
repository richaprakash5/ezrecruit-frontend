import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { DataInterfaceService } from '../data-interface.service';
import { Userprofile } from '../userprofile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  router: Router;
  dataInterfaceService : DataInterfaceService;
  constructor(dataInterfaceService : DataInterfaceService,router: Router){
    this.dataInterfaceService=dataInterfaceService;
    this.router=router;
  }
  onRefresh;
  profile;

  username;
  role;
  emailId;
  last_login;
  
  ngOnInit(){
    if(this.dataInterfaceService.getLoginStatus()==='N'){
      this.router.navigate(['/']);
      
    }
    this.dataInterfaceService.getprofile('hr').subscribe((response:Userprofile)=>{this.username=response.username;this.role=response.role;this.emailId=response.emailId;this.last_login=response.last_login})
  }
  doLogOut(){
    this.dataInterfaceService.onLogOut();
    this.router.navigate(['/']);
  }

  doRefresh(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/hr']);
  });
  }

}
