import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdmobfreeService } from '../services/admobfree.service';
import { ApiService } from '../services/auth-api.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  matchId: any = '';
  kay: any = '';
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public gs: GlobalService,
    public api: ApiService,
    public adsService: AdmobfreeService,
  ) {
    this.route.params.subscribe(params => {
      this.matchId = params.matchId
      this.kay = params.kay
    });
  }

  ngOnInit() {
  }

  viewTeam() {
    this.adsService.rendomAdShow();
    this.router.navigate(['/veiw-all-team', this.kay, this.matchId]);
  }

  finalTeam() {
    this.adsService.rendomAdShow();
    this.gs.teamImage = this.gs.selectedMatchAllData.dream_team_img;
    this.router.navigate(['/veiw-team', this.kay, this.matchId]);
  }

  goPriview() {
    this.adsService.rendomAdShow();
    this.router.navigate(['/priview', this.kay, this.matchId]);
  }

  goPoll() {
    this.adsService.rendomAdShow();
    this.router.navigate(['/pool', this.kay, this.matchId]);
  }

}
