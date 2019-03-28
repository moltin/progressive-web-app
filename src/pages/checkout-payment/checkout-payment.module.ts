import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckoutPaymentPage } from './checkout-payment';
import { CartProgressModule } from '../../components/cart-progress/cart-progress.module';


@NgModule({
  declarations: [
    CheckoutPaymentPage,
  ],
  imports: [
    CartProgressModule,
    IonicPageModule.forChild(CheckoutPaymentPage)
  ],
  entryComponents: [
    CheckoutPaymentPage
  ]
})
export class CheckoutPaymentModule {}
