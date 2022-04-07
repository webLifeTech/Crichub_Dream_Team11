import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { AdmobfreeService } from '../services/admobfree.service';

@Component({
  selector: 'app-veiw-team',
  templateUrl: './veiw-team.page.html',
  styleUrls: ['./veiw-team.page.scss'],
})
export class VeiwTeamPage implements OnInit {

  constructor(
    public gs: GlobalService,
    public adsService: AdmobfreeService
  ) {
  }

  ngOnInit() {
  }

  ionViewDidLeave() {
    // this.adsService.rendomAdShow();
    console.log(">>>>>>>>>>");

  }

}
