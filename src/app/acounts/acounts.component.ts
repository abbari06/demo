import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-acounts',
  templateUrl: './acounts.component.html',
  styleUrls: ['./acounts.component.css']
})
export class AcountsComponent implements OnInit {

  constructor(private storage: StorageService) { }
 user:any = this.storage.getUserObject();
 userObj = JSON.parse(this.user)
mailAccounts = this.userObj.body.useraccounts[0].mailaccounts
  ngOnInit(): void {
  }
 

}
