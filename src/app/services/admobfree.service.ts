import { Injectable } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';
import { LoadingController, Platform } from '@ionic/angular';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class AdmobfreeService {
  isIntAdsReady: boolean = false;
  isRewardAdsReady: boolean = false;
  isAdsShow: boolean = false;
  isAdsShowCount: boolean = false;
  isLoading: any;
  rendomAds: any = {};
  constructor(
    private admobFree: AdMobFree,
    private lc: LoadingController,
    public platform: Platform,
    public gs: GlobalService,
  ) {
    //  {"bannerId": "ca-app-pub-8487303393162645/1844647672","interstitialId": "ca-app-pub-8487303393162645/4722092454","isTestingAds": false,"squareBannerId": "ca-app-pub-3940256099942544/6300978111","squareInterstitialId": "ca-app-pub-3940256099942544/1033173712","isSquareTestingAds": true,"isSquareAdsShow": "1","squareVersion": "0.0.1"}

    // this.platform.ready().then(() => {
    //   this.preInteAds();
    // });
    this.admobFree.on(this.admobFree.events.INTERSTITIAL_CLOSE).subscribe(() => {
      this.preInteAds();
    });
    this.admobFree.on(this.admobFree.events.INTERSTITIAL_LOAD).subscribe(() => {
      if (this.isIntAdsReady) {
        this.admobFree.interstitial.show();
      }
    });
    this.admobFree.on(this.admobFree.events.INTERSTITIAL_OPEN).subscribe(() => {
      this.isIntAdsReady = false;
    });
  }

  adMobFreeBanner() {
    console.log("this.bannerId>>>" + JSON.stringify(this.rendomAds));
    if (this.isAdsShow) {
      const bannerConfig: AdMobFreeBannerConfig = {
        id: this.rendomAds.squareBannerId,
        isTesting: this.rendomAds.isSquareTestingAds,
        bannerAtTop: false,
        autoShow: true,
        overlap: false
      };
      this.admobFree.banner.config(bannerConfig);
      this.admobFree.banner.prepare().then((res) => {
        console.log("bannerConfig>>>>>>>>>>>>>>", res);
      }).catch(e => console.log(e));
    }
  }

  showInterstitialAds() {
    if (this.isAdsShow) {
      this.preLoading().then(() => {
        this.isIntAdsReady = true;
        this.admobFree.interstitial.isReady().then((isAdtime) => {
          if (isAdtime) {
            this.admobFree.interstitial.show();
          }
          if (this.isLoading) {
            this.isLoading.dismiss();
          }
        }).catch((err) => {
          if (this.isLoading) {
            this.isLoading.dismiss();
          }
        });
      });

      this.admobFree.on(this.admobFree.events.INTERSTITIAL_OPEN).subscribe(() => {
        if (this.isLoading) {
          this.isLoading.dismiss();
        }
      });

      this.admobFree.on(this.admobFree.events.INTERSTITIAL_LOAD_FAIL).subscribe(() => {
        if (this.isLoading) {
          this.isLoading.dismiss();
        }
      });
    }
  }

  async preLoading() {
    this.isLoading = await this.lc.create({
      message: "Please wait...",
      duration: 2000,
    });
    await this.isLoading.present();
  }

  preInteAds() {
    console.log("this.interstitialId>>>" + JSON.stringify(this.rendomAds));
    if (this.isAdsShow) {
      const interstitialConfig: AdMobFreeInterstitialConfig = {
        id: this.rendomAds.squareInterstitialId,
        isTesting: this.rendomAds.isSquareTestingAds,
        autoShow: false
      };
      this.admobFree.interstitial.config(interstitialConfig);
      this.admobFree.interstitial.prepare().then((res) => {
        console.log("interstitialConfig>>>>>>>>>>>>>>", res);
      }).catch(e => {
        console.log(e)
      });
    }
  }

  rendomAdShow() {
    if (this.isAdsShow) {
      this.isAdsShowCount = !this.isAdsShowCount;
      if (this.isAdsShowCount) {
        this.showInterstitialAds();
      }
      // var reqCount = this.gs.fireBaseUrl['rendomAds'] || [2, 3, 4, 5, 6, 7, 8, 9, 10];
      // var findFive = reqCount[Math.floor(Math.random() * reqCount.length)];
      // if (findFive == 1 || findFive == 3 || findFive == 5 || findFive == 6 || findFive == 9) {
      //   this.showInterstitialAds();
      // }
    }
  }
}
