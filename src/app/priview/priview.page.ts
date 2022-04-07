import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/auth-api.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-priview',
  templateUrl: './priview.page.html',
  styleUrls: ['./priview.page.scss'],
})
export class PriviewPage implements OnInit {

  constructor(
    public api: ApiService,
    public gs: GlobalService,
  ) { }

  ngOnInit() {
    console.log("gs.selectedMatchAllData><>", this.gs.selectedMatchAllData)
  }

}
