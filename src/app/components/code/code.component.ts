import {AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

declare var Prism;

@Component({
  selector: 'blog-code',
  templateUrl: 'code.component.html',
  styleUrls: ['code.component.css'],
  preserveWhitespaces: true
})
export class CodeComponent implements OnInit, AfterViewChecked {

  @ViewChild('code', { static: true }) code: ElementRef;

  @Input()
  highlightLines;

  @Input()
  language = 'ts';

  ngOnInit() {}

  ngAfterViewChecked() {
    const innerText = this.code.nativeElement.textContent;
    const highlightedCode = Prism.highlight(innerText, Prism.languages[this.language]);
    this.code.nativeElement.innerHTML = highlightedCode;
  }
}
