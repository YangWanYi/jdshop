import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registerstep3PageRoutingModule } from './registerstep3-routing.module';

import { Registerstep3Page } from './registerstep3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registerstep3PageRoutingModule
  ],
  declarations: [Registerstep3Page]
})
export class Registerstep3PageModule {}
