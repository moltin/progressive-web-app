import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcodeInputPage } from './barcode-input';


@NgModule({
  declarations: [
    BarcodeInputPage,
  ],
  imports: [
    IonicPageModule.forChild(BarcodeInputPage)
  ],
  entryComponents: [
    BarcodeInputPage
  ]
})
export class BarcodeInputModule {}
