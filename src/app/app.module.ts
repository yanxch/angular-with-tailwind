import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TitleComponent} from './components/title/title.component';
import {SubTitleComponent} from './components/subtitle/subtitle.component';
import {TextComponent} from './components/text/text.component';
import {TextContainerComponent} from './components/text-container/text-container.component';
import {BlogContentComponent} from './components/blog-content/blog-content.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    SubTitleComponent,
    TextContainerComponent,
    TextComponent,
    BlogContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
