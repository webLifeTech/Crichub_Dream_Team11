import { Component, OnInit } from '@angular/core';
import { AdmobfreeService } from '../services/admobfree.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    public gs: GlobalService,
    // public router: Router,
    public adsService: AdmobfreeService,
  ) { }

  ngOnInit() {
  }

}
