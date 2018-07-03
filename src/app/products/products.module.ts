import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '../layout/layout.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SuggestedProductsComponent } from './suggested-products/suggested-products.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    LayoutModule,
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    SuggestedProductsComponent,
    ProductFormComponent,
  ],
})
export class ProductsModule {}
