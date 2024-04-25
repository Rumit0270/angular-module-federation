import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirstFeatureModule } from "./first-feature/first-feature.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FirstFeatureModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
