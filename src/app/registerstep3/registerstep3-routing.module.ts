import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registerstep3Page } from './registerstep3.page';

const routes: Routes = [
  {
    path: '',
    component: Registerstep3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registerstep3PageRoutingModule {}
