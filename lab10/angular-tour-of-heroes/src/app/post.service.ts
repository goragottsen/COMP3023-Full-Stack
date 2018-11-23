import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  posts: any[];
  http: Http;
  constructor() {}

  getPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      console.log(response);
      this.posts = response.json();
  });
}

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.http.post('https://jsonplaceholder.typicode.com/posts',
      JSON.stringify(post))
      .subscribe(response => {
        console.log(response.json());
      });
  }

  updatePost(post): void {
    console.log(`update post: ${post.title}`);

    this.http.put('https://jsonplaceholder.typicode.com/posts'
    + '/' + post.id,
      JSON.stringify(post))
      .subscribe(response => {
        console.log(response.json());
      });
  }

  deletePost(post): void {
    console.log(`delete post: ${post.title}`);

    this.http.delete('https://jsonplaceholder.typicode.com/posts'
    + '/' + post.id,
      JSON.stringify(post))
      .subscribe(response => {
        console.log(response.json());
      });
  }
}
