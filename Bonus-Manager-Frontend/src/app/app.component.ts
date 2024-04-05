import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StorageInfosService} from "./services/storage-infos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isCEOLoggedIn: boolean = false;
  isHRLoggedIn: boolean = false;
constructor(private router:Router,
            private storage:StorageInfosService) {
}




  ngOnInit(): void {
    this.router.events.subscribe(event =>{
      if(event.constructor.name == "NavigationEnd"){
        this.isCEOLoggedIn = this.storage.isCEOLoggedIn();
        this.isHRLoggedIn = this.storage.isHRLoggedIn();

      }
    })
  }

  logout(){
  this.storage.logout();
  this.router.navigateByUrl("")
  }
}
