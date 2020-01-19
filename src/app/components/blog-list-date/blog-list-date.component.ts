import {Component} from '@angular/core';

@Component({
  selector: 'blog-list-date',
  template: `
    <blog-text class="text-right">
      <ng-content></ng-content>
    </blog-text>
  `,
  styleUrls: ['blog-list-date.component.css']
})
export class BlogListDateComponent {

}
