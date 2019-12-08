import {Component, OnInit, ContentChild, ElementRef, Input, Directive} from '@angular/core';


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

@Directive({
  selector: '[data-start]'
})
export class RemoveLineNumberDirective {

  constructor(private element: ElementRef) {
    console.log('FOUND LINE HIGHLIGHT: ' + element);
  }
}