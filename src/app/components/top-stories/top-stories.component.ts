import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../../shared/services/stories.service';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']
})
export class TopStoriesComponent implements OnInit {
  
  items: number[];
  stories;
  
  

  constructor(private storiesService: StoriesService) {
    this.items = Array(50);
  }

  ngOnInit() {
    this.storiesService.getTopStories().subscribe(
        stories => this.stories = stories);
        
  }

  
}

