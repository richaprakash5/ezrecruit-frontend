import { Component, Input } from '@angular/core';
import { DataInterfaceService } from '../data-interface.service';
import { Router} from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  decision: any;
  role: any;
  username: any;
  pwd: any;
  input: any;
  dataInterfaceService : DataInterfaceService;
  router: Router;
  constructor(dataInterfaceService : DataInterfaceService,router: Router){
    this.dataInterfaceService=dataInterfaceService;
    this.router=router;
  }
 ngOnInit(){
 }
  onReset(){
    this.username=null;
    this.pwd=null;
    this.role=null;
  }


  getLogin(){
    this.input={
      "username": this.username,
      "password": this.pwd,
      "role":this.role
    }
    console.log(this.input);
    this.dataInterfaceService.getLogin(this.input).subscribe({next:(response:Login)=>{this.decision=response.status;

        if(this.role==='hr'&&this.decision==='Success'){
          this.dataInterfaceService.onLogIn();
          this.router.navigate(['/hr']);
        }else if(this.role==='interviewer'&&this.decision==='Success'){
          this.dataInterfaceService.onLogIn();
          this.router.navigate(['/interviewer',{interviewer_name:this.username}]);
        }else{
          //Ignore
        }
      
    },
    error:(error)=>{alert(error.error.message),this.onReset()}
  });

  
  }

}
