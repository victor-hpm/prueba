import { Component, OnInit, ViewChild   } from '@angular/core';
// para ViewChild
import { CommentsTableComponent } from './../comments-table/comments-table.component';

// servicio
import { PostServiceService } from './../../../core/services/post-service.service';
// modelos
import { Post } from './../../../core/models/post';
import { Comments } from './../../../core/models/comments';

@Component({
  selector: 'app-table-post',
  templateUrl: './table-post.component.html',
  styleUrls: ['./table-post.component.css']
})
export class TablePostComponent implements OnInit {

  @ViewChild(CommentsTableComponent) commentsTable: CommentsTableComponent;

   public posts: Array<Post> = [];
   public comments: Array<Comments[]> = [];

  constructor(private postServiceService: PostServiceService) { }


  ngOnInit(): void {
    this.getAllPosts();
  }


  getAllPosts(): any{
    this.postServiceService.getList()
    .subscribe(posts => {
      // console.log('posts', posts);
      this.posts = posts;
      // this.posts = posts.map(objPost => objPost);
      console.log('this.posts', this.posts);
    });
  }

  enviarPeticion(id: string): void{
     this.commentsTable.getComments(id);
  }


}
