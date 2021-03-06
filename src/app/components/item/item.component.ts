import { Component, OnInit, Input } from '@angular/core';
import { StoriesService } from '../../shared/services/stories.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() itemId: number;
  public item: object;

  constructor(private storiesService: StoriesService) { }

  ngOnInit() {
    this.storiesService.getItem(this.itemId).subscribe
        (data => {this.item = data},
          error => console.log('there was an error while getting item'));
  }

}
