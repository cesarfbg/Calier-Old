import { Component, OnInit } from '@angular/core';

import { PostService } from '../../../../services/post.service';
import { Post } from '../../../../models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postList: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
    .snapshotChanges()
    .subscribe(item => {
      this.postList = [];
      item.forEach(element => {
        const x = element.payload.toJSON();
        x['key'] = element.key;
        this.postList.push(x as Post);
      })
    })
  }

}
