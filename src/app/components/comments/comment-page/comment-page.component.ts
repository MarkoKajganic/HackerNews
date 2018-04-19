import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoriesService } from '../../../shared/services/stories.service';

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.css']
})
export class CommentPageComponent implements OnInit {

  id;   //to get story ID from route
  private item: any;

  constructor(private route: ActivatedRoute,
              private service: StoriesService) { }

  ngOnInit() {    
    this.id = this.route.params.subscribe(params => {
      let itemId = +params['id'];
      this.service.getItem(itemId).subscribe(data => {
        this.item = data;
      }, error => console.log('Could not load item' + itemId));
    });
  }

}
