import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartProgress } from './cart-progress';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CartProgress,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartProgress
  ]
})
export class CartProgressModule {}
