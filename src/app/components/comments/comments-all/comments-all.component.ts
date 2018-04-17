import { Component, OnInit, Input } from '@angular/core';
import { StoriesService } from '../../../shared/services/stories.service';

@Component({
  selector: 'app-comments-all',
  templateUrl: './comments-all.component.html',
  styleUrls: ['./comments-all.component.css']
})
export class CommentsAllComponent implements OnInit {
  @Input() commentIds;
  
  
  constructor(private service: StoriesService) { }

  ngOnInit() {
    this.commentIds = JSON.parse("[" + this.commentIds + "]");
    
  }

}
