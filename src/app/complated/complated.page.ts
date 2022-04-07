import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AdmobfreeService } from '../services/admobfree.service';
import { ApiService } from '../services/auth-api.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-complated',
  templateUrl: './complated.page.html',
  styleUrls: ['./complated.page.scss'],
})
export class ComplatedPage implements OnInit {
  constructor(
    public gs: GlobalService,
    public router: Router,
    public route: ActivatedRoute,
    public nc: NavController,
    public api: ApiService,
    public adsService: AdmobfreeService,
  ) {
    this.route.params.subscribe(async (params) => {
      let dd = await this.gs.getMatchList('get_complete_match_list', params.sportId);
    });
  }

  ngOnInit() {
  }

  back() {
    this.nc.pop();
  }

  goToDashboard(teams: any) {
    this.adsService.rendomAdShow();
    this.gs.selectedMatchAllData = teams;
    this.router.navigate(['/dashboard', 'get_upcoming_match_list', teams.match_id])
  }
}
