import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { LinksAdderComponent } from './components/input/input.component';
import { AppComponent }  from './app.component';
import { LinksComponent } from './components/links/links.component';
import { LinkListService } from './services/link-list.service';
import { LinkListStoregeService } from './services/link-list-storege.service';
import { MoveDirective } from './directives/move.directive';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SeeMoreComponent } from './components/see-more/see-more.component';
import { LinkService } from './services/link.service';
import { AppRoutingModule } from './app-routing.module'
import { HttpModule } from  '@angular/http';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    SeeMoreComponent,
    LinksAdderComponent,
    LinksComponent,
    MoveDirective
  ],
  providers: [LinkListService, LinkListStoregeService, LinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
