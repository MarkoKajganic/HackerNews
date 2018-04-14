import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { TopStoriesComponent } from './components/top-stories/top-stories.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopStoriesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
