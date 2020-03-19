import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Post } from '../../../../models/post';
import { PostService } from '../../../../services/post.service';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  headerTitle: string;
  post: Post = new Post();

  constructor(
    private postService: PostService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.postService.getPosts();

    const key = this.activeRoute.snapshot.paramMap.get('id');

    if (key !== 'add') {
      this.postService.getPost(key).snapshotChanges()
      .subscribe( resp => {
          if (!resp.key) {
            return this.router.navigate(['admin/blog']);
          }
          const x = resp.payload.toJSON();

          this.post.key = resp.key;
          this.post.title = x['title'];
          this.post.author = x['author'];
          this.post.shortDesc = x['shortDesc'];
          this.post.longDesc = x['longDesc'];
          // this.post.craetedAt = x['craetedAt'];
          this.post.tags = x['tags'];
          this.post.image = x['image'];
          this.post.images = x['images'];
          // this.post.slug = x['slug'];
          this.post.public = x['public'];
        }
      );
    }

  }

  onSubmit(postForm: NgForm) {

    if ( !postForm.valid ) {
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información...',
      type: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    if ( this.post.key ) {
      this.postService.updatePost(this.post).then((item) => {
        Swal.fire({
          title: 'Post',
          text: 'Se ha actualizado correctamente.',
          type: 'success',
        }).then(() => {
            this.router.navigate(['admin/blog']);
          });
       }).catch((err) => {
        Swal.fire({
          title: 'Ups!',
          text: 'No se ha logrado guardar correctamente.',
          type: 'error',
        });
       });
    } else {

      this.postService.insertPost(this.post).then((item) => {
        this.post.key = item.key;
        Swal.fire({
          title: 'Nuevo Post',
          text: 'Se ha guardado correctamente.',
          type: 'success',
        }).then(() => {
          this.router.navigate(['admin/blog']);
        });
       }).catch((err) => {
        Swal.fire({
          title: 'Ups!',
          text: 'No se ha logrado guardar correctamente.',
          type: 'error',
        });
       });
    }


  }

  resetForm(postForm){
  }

}
