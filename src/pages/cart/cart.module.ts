import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartPage } from './cart';
import { ButtonSelect } from './components/button-select';


@NgModule({
  declarations: [
    CartPage,
    ButtonSelect
  ],
  imports: [
    IonicPageModule.forChild(CartPage)
  ],
  entryComponents: [
    CartPage
  ]
})
export class CartModule {}
