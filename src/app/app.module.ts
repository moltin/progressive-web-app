import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MobileSelfCheckoutApp } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { Moltin } from '../providers/moltin/moltin';

@NgModule({
  declarations: [
    MobileSelfCheckoutApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MobileSelfCheckoutApp, {
      backButtonText: '',
      backButtonIcon: 'arrow-left'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MobileSelfCheckoutApp
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule,
    Moltin
  ]
})
export class AppModule {}
