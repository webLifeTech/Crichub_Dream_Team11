import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, IonRouterOutlet, Platform } from '@ionic/angular';
import { ApiService } from './services/auth-api.service';
import { GlobalService } from './services/global.service';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { AdmobfreeService } from './services/admobfree.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appVersion: any;
  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;

  constructor(
    private platform: Platform,
    private router: Router,
    public gs: GlobalService,
    public ac: ActionSheetController,
    public av: AppVersion,
    public adsService: AdmobfreeService,
    public api: ApiService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(0, () => {
        if (this.routerOutlet && this.routerOutlet.canGoBack()) {
          this.routerOutlet.pop();
        } else if (this.router.url) {
          if (this.router.url != '/welcome') {
            this.router.navigate(['/welcome']);
          } else {
            navigator['app'].exitApp();
          }
        }
      })

      this.api.post('get_app_info', '').then((res: any) => {
        if (res.ResponseCode == 1) {
          this.adsService.rendomAds = JSON.parse(res.ResultData.random_ads);
          this.appVersion = this.adsService.rendomAds.squareVersion;
          this.adsService.isAdsShow = this.adsService.rendomAds.isSquareAdsShow == '1' ? true : false;
          setTimeout(() => {
            if (this.adsService.isAdsShow) {
              this.adsService.adMobFreeBanner();
              this.adsService.preInteAds();
            }
          }, 300);
          this.av.getVersionNumber().then(crVersion => {
            this.gs.crVersion = crVersion;
            if (crVersion != this.appVersion) {
              this.appUpdatePopup();
            }
          })
        }
      }, err => {
        console.log("errerrerrerrerr>>>>" + JSON.stringify(err));
      })
    });
  }

  async appUpdatePopup() {
    const actionSheet = await this.ac.create({
      header: 'New big version is available',
      mode: 'ios',
      cssClass: 'update_action',
      buttons: [{
        text: 'Update Now',
        cssClass: "dark",
        handler: () => {
          this.gs.rateApp();
        }
      },
      {
        text: 'Available V' + this.appVersion,
        cssClass: "dark",
        handler: () => {
          this.gs.rateApp();
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        cssClass: "dark",
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present();
  }
}
