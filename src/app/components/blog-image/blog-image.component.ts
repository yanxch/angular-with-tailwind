import {Component, Input} from '@angular/core';

@Component({
  selector: 'blog-image',
  template: `
    <div class="max-w-xl mx-auto m-5 mb-10">
      <img [src]="src">
      <p class="text-center text-sm">{{description}}</p>
    </div>
  `,
  styleUrls: ['blog-image.component.css']
})
export class BlogImageComponent {
  @Input()
  src: string;

  @Input()
  description: string;
}
