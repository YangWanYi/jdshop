import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registerstep2PageRoutingModule } from './registerstep2-routing.module';

import { Registerstep2Page } from './registerstep2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registerstep2PageRoutingModule
  ],
  declarations: [Registerstep2Page]
})
export class Registerstep2PageModule {}
