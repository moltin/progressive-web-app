import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductCatalog } from './product-catalog';


@NgModule({
  declarations: [
    ProductCatalog,
  ],
  imports: [
    IonicPageModule.forChild(ProductCatalog)
  ],
  entryComponents: [
    ProductCatalog
  ]
})
export class ProductCatalogModule {}
