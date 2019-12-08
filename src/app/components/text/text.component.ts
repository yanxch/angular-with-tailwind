import {Component} from '@angular/core';

@Component({
  selector: 'blog-text',
  template: /*html*/`<p><ng-content></ng-content></p>`,
  styleUrls: ['text.component.css']
})
export class TextComponent {}
