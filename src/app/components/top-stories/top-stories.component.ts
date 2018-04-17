import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../../shared/services/stories.service';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']
})
export class TopStoriesComponent implements OnInit {
  
  private items: any;
  
  constructor(private storiesService: StoriesService) { }

  ngOnInit() {
    this.storiesService.getTopStories().subscribe
        (data => {this.items = data},
         error => console.log('there was an error while getting stories'));
  }

  
}

