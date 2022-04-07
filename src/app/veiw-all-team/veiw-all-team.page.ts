import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/auth-api.service';
import { GlobalService } from 'src/app/services/global.service';
import { AdmobfreeService } from '../services/admobfree.service';

@Component({
  selector: 'app-veiw-all-team',
  templateUrl: './veiw-all-team.page.html',
  styleUrls: ['./veiw-all-team.page.scss'],
})
export class ViewAllTeamPage implements OnInit {
  teamImages: any = [];
  matchId: any = '';
  kay: any = '';
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public gs: GlobalService,
    public api: ApiService,
    public adsService: AdmobfreeService
  ) {
    this.route.params.subscribe(params => {
      this.matchId = params.matchId;
      this.kay = params.kay;
      this.getData(params.matchId);
    });
  }

  ngOnInit() {
  }

  viewTeam(img) {
    this.adsService.rendomAdShow();
    this.gs.teamImage = img;
    this.router.navigate(['/veiw-team', this.matchId, this.kay]);
  }

  getData(matchId) {
    let body = {
      match_id: Number(matchId)
    }
    this.api.post('get_match_detail', body).then((res: any) => {
      if (res.ResponseCode == 1) {
        var array = res.ResultData.prediction_img.split(',');
        this.teamImages = array;
      }
    })
  }

}
