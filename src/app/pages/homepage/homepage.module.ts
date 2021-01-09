import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';

import { SharedModule } from '../../shared-components/shared.module';
import { ListingComponent } from './listing/listing.component';

@NgModule({
  declarations: [HomepageComponent, ListingComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule
  ]
})
export class HomepageModule { }
