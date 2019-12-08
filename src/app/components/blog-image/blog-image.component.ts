import {Component, Input} from '@angular/core';

@Component({
  selector: 'blog-image',
  template: `
    <div class="max-w-xl mx-auto m-5">
      <img [src]="src">
    </div>
  `,
  styleUrls: ['blog-image.component.css']
})
export class BlogImageComponent {
  @Input()
  src: string;
}
