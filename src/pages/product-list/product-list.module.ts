import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductList } from './product-list';


@NgModule({
  declarations: [
    ProductList
  ],
  imports: [
    IonicPageModule.forChild(ProductList)
  ],
  entryComponents: [
    ProductList
  ]
})
export class ProductListModule {}
