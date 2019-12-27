import {Component} from '@angular/core';
import {posts} from './posts-config';

@Component({
  selector: 'blog-home',
  template: `
    <blog-text-container>
        <h1>Hi there! </h1>

        <div *ngFor="let post of posts">

          <blog-text><b><a href="#" [routerLink]="post.route">{{ post.title }}</a></b></blog-text>
          <blog-list-date>{{ post.publishedAt }}</blog-list-date>

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
