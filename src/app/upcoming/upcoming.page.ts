import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AdmobfreeService } from '../services/admobfree.service';
import { ApiService } from '../services/auth-api.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.page.html',
  styleUrls: ['./upcoming.page.scss'],
})
export class UpcomingPage implements OnInit {
  // isDisabled: any = true;
  // allSportsMatchList: any = [];
  // allSportCategoryList: any = [];
  constructor(
    public gs: GlobalService,
    public router: Router,
    public route: ActivatedRoute,
    public nc: NavController,
    public adsService: AdmobfreeService,
    public api: ApiService
  ) {
    this.route.params.subscribe(params => {
      console.log("params>>", params);
      this.gs.getMatchList('get_upcoming_match_list', params.sportId);
    });
    this.getCategoryData();
  }

  ngOnInit() {
  }

  back() {
    this.nc.pop();
  }

  getCategoryData() {
    // this.api.post2('LiveLine', {}).then((res: any) => {
    //   console.log("res>>>", res);

    //   // if (res.ResponseCode == 1) {
    //   //   this.allSportCategoryList = res.ResultData;
    //   //   if (this.allSportCategoryList.length) {
    //   //     this.isDisabled = true;
    //   //     this.getMatchList(this.allSportCategoryList[0].category_id);
    //   //   }
    //   // }
    // })
  }

  // getCategoryData() {
  //   this.api.post('get_category_list', '').then((res: any) => {
  //     if (res.ResponseCode == 1) {
  //       this.allSportCategoryList = res.ResultData;
  //       if (this.allSportCategoryList.length) {
  //         this.isDisabled = true;
  //         this.getMatchList(this.allSportCategoryList[0].category_id);
  //       }
  //     }
  //   })
  // }

  // getMatchList(value) {
  //   let body = {
  //     category_id: value
  //   }
  //   this.api.post('get_upcoming_match_list', body).then((res: any) => {
  //     if (res.ResponseCode == 1) {
  //       this.allSportsMatchList = res.ResultData;
  //     }
  //     this.isDisabled = false;
  //   }, err => {
  //     this.isDisabled = false;
  //   })
  // }

  goToDashboard(teams: any) {
    console.log("teams>>>", teams);
    this.adsService.rendomAdShow();
    this.gs.selectedMatchAllData = teams;
    this.router.navigate(['/dashboard', 'get_upcoming_match_list', teams.match_id])
  }
}
