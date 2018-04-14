import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { StoriesService } from './services/stories.service';
import { ItemComponent } from '../components/item/item.component';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    
  ],
  providers: [
    StoriesService
],
  declarations: [
    ItemComponent
  ],
  exports: [
    ItemComponent
]

})
export class SharedModule { }