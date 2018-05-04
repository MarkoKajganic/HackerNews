import { Component, OnInit, Input } from '@angular/core';
import { StoriesService } from '../../../shared/services/stories.service';

@Component({
  selector: 'app-comments-item',
  templateUrl: './comments-item.component.html',
  styleUrls: ['./comments-item.component.css']
})
export class CommentsItemComponent implements OnInit {
  @Input() commentId;

  public comment: object;
  public show = true;
 
  constructor(private service: StoriesService) { }

  ngOnInit() {
    this.service.getItem(this.commentId).subscribe
    (data => {this.comment = data},
      error => console.log('there was an error while getting item'));
  }


}
