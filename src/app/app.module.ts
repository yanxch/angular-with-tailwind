import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TitleComponent} from './components/title/title.component';
import {SubTitleComponent} from './components/subtitle/subtitle.component';
import {TextComponent} from './components/text/text.component';
import {TextContainerComponent} from './components/text-container/text-container.component';
import {BlogContentComponent} from './components/blog-content/blog-content.component';
import {CodeComponent} from './components/code/code.component';
import {QuoteComponent} from './components/blog-quote/blog-quote.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    SubTitleComponent,
    TextContainerComponent,
    TextComponent,
    BlogContentComponent,
    CodeComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
