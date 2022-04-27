import { Component } from '@angular/core';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { Platform } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'test-platform-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private appVersion: AppVersion, private platform: Platform) {
    console.log('Hello');
    // this.platform.ready().then(()=> {
    //   this.appVersion.getAppName().then(res=> {
    //     console.log(res);
    //   });
    //   this.appVersion.getVersionNumber().then(res=> {
    //     console.log(res);
    //   });
    // })
  }

  myImage = '';

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });
    if (image.webPath)
      this.myImage = image.webPath;
  }

  addPhotoToGallery() {
    this.addNewToGallery();
  }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }
}
