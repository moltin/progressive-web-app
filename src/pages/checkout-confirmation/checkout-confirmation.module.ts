import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckoutConfirmationPage } from './checkout-confirmation';
import { CartProgressModule } from '../../components/cart-progress/cart-progress.module';


@NgModule({
  declarations: [
    CheckoutConfirmationPage,
  ],
  imports: [
    CartProgressModule,
    IonicPageModule.forChild(CheckoutConfirmationPage)
  ],
  entryComponents: [
    CheckoutConfirmationPage
  ]
})
export class CheckoutConfirmationModule {}
