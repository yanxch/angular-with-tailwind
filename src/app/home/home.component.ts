import {Component} from '@angular/core';
import {posts} from './posts-config';

@Component({
  selector: 'blog-home',
  template: `
    <blog-text-container>
        <div class="md:flex justify-center">
          <h1>Hi there</h1>
          <img class="avatar" src="/assets/me_u_small2.jpg">
          <h1>I'm Christian</h1>

        </div>
        <div class="md:flex justify-center mb-10">
          <p>I like to write about software topics!</p>
          <a href="https://twitter.com/y_a_n_x" target="_blank" class="self-center"><img class="h-6 w-6 mx-3" src="/assets/twitter.svg"></a>
        </div>
        <div *ngFor="let post of posts">
          <div class="post-header">
            <blog-text><b><a href="#" [routerLink]="post.route">{{ post.title }}</a></b></blog-text>
            <blog-list-date class="">{{ post.publishedAt }}</blog-list-date>
          </div>
          <blog-text>{{ post.summary }}</blog-text>
          <hr>
        </div>
      </blog-text-container>
  `,
  styleUrls: ['home.component.css'],
  preserveWhitespaces: true
})
export class HomeComponent {
  posts = posts;
}
