import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registerstep1Page } from './registerstep1.page';

const routes: Routes = [
  {
    path: '',
    component: Registerstep1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registerstep1PageRoutingModule {}
