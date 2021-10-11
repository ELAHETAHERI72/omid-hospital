import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { SideNaveComponent } from './side-nave/side-nave.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

const route = [
  { path: '', redirectTo: 'layout', pathMatch: 'full' },
  {
    path: 'layout', component: LayoutComponent, children: [
      { path: 'request', loadChildren: () => import('./content/request/request.module').then(m => m.RequestModule) }
    ]
  },
  {
    path: 'detail/:id', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)

  }
]

@NgModule({
  declarations: [LayoutComponent, SideNaveComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule.forChild(route)
  ]
})
export class LayoutModule { }
