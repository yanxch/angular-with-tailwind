import {Component, OnInit, ContentChild, ElementRef} from '@angular/core';


// prismjs/themes/prism-dark.css

@Component({
  selector: 'blog-code',
  template: `
    <pre><code class="lang-js"><ng-content></ng-content></code></pre>
  `,
  styleUrls: ['code.component.css']

})
export class CodeComponent implements OnInit {

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
    // const code = this.elementRef.nativeElement.innerText;
    // The code snippet you want to highlight, as a string

    const code = `
      class Test {
        private field: string;
      }
    `;

    // Returns a highlighted HTML string

    // console.log(html);
  }

}
