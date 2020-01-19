import {Component} from '@angular/core';

@Component({
  selector: 'blog-summary',
  template: `
    <p><ng-content></ng-content></p>
  `,
  styleUrls: ['blog-summary.component.css']
})
export class BlogSummaryComponent {

}