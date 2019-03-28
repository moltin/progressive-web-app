import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MobileSelfCheckoutApp {
  rootPage:any = 'home';

  constructor(platform: Platform) {
    platform.ready().then(() => {
      
    });
  }
}
