import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { TopStoriesComponent } from './components/top-stories/top-stories.component';
import { SharedModule } from './shared/shared.module';
import { ItemComponent } from './components/item/item.component';
import { DomainPipe } from './shared/domain.pipe';
import { MomentModule } from 'ngx-moment';
import { CommentPageComponent } from './components/comments/comment-page/comment-page.component';
import { CommentsAllComponent } from './components/comments/comments-all/comments-all.component';
import { CommentsItemComponent } from './components/comments/comments-item/comments-item.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopStoriesComponent,
    ItemComponent,
    DomainPipe,
    CommentPageComponent,
    CommentsAllComponent,
    CommentsItemComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MomentModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
