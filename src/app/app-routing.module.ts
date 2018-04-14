import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopStoriesComponent } from './components/top-stories/top-stories.component';

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
