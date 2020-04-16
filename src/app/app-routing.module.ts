import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'registerstep1',
    loadChildren: () => import('./registerstep1/registerstep1.module').then( m => m.Registerstep1PageModule)
  },
  {
    path: 'registerstep2',
    loadChildren: () => import('./registerstep2/registerstep2.module').then( m => m.Registerstep2PageModule)
  },
  {
    path: 'registerstep3',
    loadChildren: () => import('./registerstep3/registerstep3.module').then( m => m.Registerstep3PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'productlist',
    loadChildren: () => import('./productlist/productlist.module').then( m => m.ProductlistPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
