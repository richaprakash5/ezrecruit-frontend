import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../config';
import { DataInterfaceService } from '../data-interface.service';


@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent {
   dataInterfaceService : DataInterfaceService;
   router: Router;

   constructor(dataInterfaceService : DataInterfaceService,router: Router){
     this.dataInterfaceService=dataInterfaceService;
     this.router=router;
   }
   posts : any;
   ngOnInit(){

    this.dataInterfaceService.getRoster().subscribe((response) => { this.posts = response; });
      if(this.dataInterfaceService.getLoginStatus()==='N'){
        console.log(this.dataInterfaceService.getLoginStatus());
        this.router.navigate(['/']);
        
      }


    }

}
