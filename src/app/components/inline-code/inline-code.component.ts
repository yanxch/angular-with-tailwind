import {Component} from '@angular/core';

@Component({
  selector: 'blog-inline-code',
  template: '<code><ng-content></ng-content></code>',
  styleUrls: ['inline-code.component.css']
})
export class InlineCodeComponent {}
