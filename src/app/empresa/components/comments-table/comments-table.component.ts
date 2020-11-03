import { Component, OnInit } from '@angular/core';

import { PostServiceService } from './../../../core/services/post-service.service';

import { Comments } from './../../../core/models/comments';

@Component({
  selector: 'app-comments-table',
  templateUrl: './comments-table.component.html',
  styleUrls: ['./comments-table.component.css']
})
export class CommentsTableComponent implements OnInit {

  public comments: Array<Comments> = [];

  constructor(private postServiceService: PostServiceService) { }

  ngOnInit(): void {}

  getComments(id: string): void {
    this.postServiceService.getComents(id)
    .subscribe(comments => {
      // console.log('comments', comments);
      this.comments = comments;
      window.scroll(0, 0);
      console.log('this.comments', this.comments);
    });
  }

}
