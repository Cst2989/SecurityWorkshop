
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ArticleComponent } from "./article.component";

@NgModule({
  declarations: [ArticleComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [ArticleComponent]
})
export class ArticleModule {}
