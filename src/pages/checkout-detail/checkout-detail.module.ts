import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckoutDetailPage } from './checkout-detail';
import { CartProgressModule } from '../../components/cart-progress/cart-progress.module';


@NgModule({
  declarations: [
    CheckoutDetailPage,
  ],
  imports: [
    CartProgressModule,
    IonicPageModule.forChild(CheckoutDetailPage)
  ],
  entryComponents: [
    CheckoutDetailPage
  ]
})
export class CheckoutDetailModule {}
