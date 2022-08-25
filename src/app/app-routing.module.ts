import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'reports', pathMatch: 'full' },
  { path: 'reports', loadChildren: () => import('./reports-page/reports-page.module').then(m => m.ReportsPageModule) },
  { path: 'posts', loadChildren: () => import('./posts-page/posts-page.module').then(m => m.PostsPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'legacy',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
