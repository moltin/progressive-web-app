import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddToCartSuccessPage } from './success';


@NgModule({
  declarations: [
    AddToCartSuccessPage,
  ],
  imports: [
    IonicPageModule.forChild(AddToCartSuccessPage)
  ],
  entryComponents: [
    AddToCartSuccessPage
  ]
})
export class AddToCartSuccessModule {}
