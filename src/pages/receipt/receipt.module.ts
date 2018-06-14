import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceiptPage } from './receipt';
import { VerificationDisplay } from './verification/verification';


@NgModule({
  declarations: [
    ReceiptPage,
    VerificationDisplay
  ],
  imports: [
    IonicPageModule.forChild(ReceiptPage)
  ],
  entryComponents: [
    ReceiptPage
  ]
})
export class ReceiptPageModule {}
