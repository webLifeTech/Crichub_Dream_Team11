import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmobfreeService } from '../services/admobfree.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.page.html',
  styleUrls: ['./main-layout.page.scss'],
})
export class MainLayoutPage implements OnInit {

  constructor(
    public gs: GlobalService,
    public router: Router,
    public adsService: AdmobfreeService,
  ) { }

  ngOnInit() {
  }

  goToDashboard(item) {
    this.adsService.rendomAdShow();
    this.router.navigate(['/main-tabs/tabs/upcoming', item.category_id]);
    this.gs.category_id = item.category_id;
    this.gs.getMatchList('get_upcoming_match_list', item.category_id);
  }

}
