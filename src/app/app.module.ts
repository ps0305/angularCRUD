import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { ProductComponent } from './product/product.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomeComponent, ProductComponent],
  imports: [
    BrowserModule,
    HttpModule,FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'product', component: ProductComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
