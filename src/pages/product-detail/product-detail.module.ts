import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductDetailPage } from './product-detail';


@NgModule({
  declarations: [
    ProductDetailPage
  ],
  imports: [
    IonicPageModule.forChild(ProductDetailPage)
  ],
  entryComponents: [
    ProductDetailPage
  ]
})
export class ProductDetailModule {}
