import { Component } from '@angular/core';

declare const VERSION: string;


@Component({
  selector: 'blog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true
})
export class AppComponent {
  title = 'angular-with-tailwind: ';
}
