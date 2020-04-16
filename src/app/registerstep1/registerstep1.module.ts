import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registerstep1PageRoutingModule } from './registerstep1-routing.module';

import { Registerstep1Page } from './registerstep1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registerstep1PageRoutingModule
  ],
  declarations: [Registerstep1Page]
})
export class Registerstep1PageModule {}
