import { Component } from '@angular/core';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'test-platform-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private appVersion: AppVersion, private platform: Platform) {
    console.log('Hello');
    this.platform.ready().then(()=> {
      this.appVersion.getAppName().then(res=> {
        console.log(res);
      });
      this.appVersion.getVersionNumber().then(res=> {
        console.log(res);
      });
    })
   }
}
