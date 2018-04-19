import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopStoriesComponent } from './components/top-stories/top-stories.component';
import { CommentPageComponent } from './components/comments/comment-page/comment-page.component';

const appRoutes: Routes = [
   {
       path: '',
       redirectTo: '/topStories',
       pathMatch: 'full'
   },
   {
      path: 'topStories',
      component: TopStoriesComponent,
   },
   {
      path: 'item/:id',
      component: CommentPageComponent,
   },

];

@NgModule({
   imports: [
       RouterModule.forRoot(
           appRoutes
       )
   ],
   exports: [
       RouterModule
   ]
})export class AppRoutingModule {}
