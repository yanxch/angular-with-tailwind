import {Component, OnInit, ContentChild, ElementRef, Input} from '@angular/core';


// prismjs/themes/prism-dark.css

@Component({
  selector: 'blog-code',
  templateUrl: 'code.component.html',
  styleUrls: ['code.component.css']
})
export class CodeComponent {
  @Input()
  highlightLines;
}
