import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }


  getPosts() {
    return this.postList = this.firebase.list('posts');
  }

  getPost(key: string) {
    return this.firebase.object(`posts/${key}`);
  }

  insertPost(post: Post) {
    return this.postList.push(post);
  }

  updatePost(post: Post) {
    const postTemp = {
      ...post
    };
    delete postTemp.key;
    return this.postList.update(post.key, postTemp);
  }

  // deleteProduct(key: string) {
  //   this.postList.remove(key);
  // }


}
