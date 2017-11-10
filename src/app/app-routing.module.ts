import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeeMoreComponent }      from './components/see-more/see-more.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LinksComponent } from './components/links/links.component';

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'links', component: LinksComponent},
    {path: 'details/:id/:titleL', component: SeeMoreComponent},
    {path: 'details', component: SeeMoreComponent},
    {path: 'back', redirectTo: 'links'},
    {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


