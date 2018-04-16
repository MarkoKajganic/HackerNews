import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments-all',
  templateUrl: './comments-all.component.html',
  styleUrls: ['./comments-all.component.css']
})
export class CommentsAllComponent implements OnInit {
  @Input() commentIds;

  constructor() { }

  ngOnInit() {
    
  }

}
