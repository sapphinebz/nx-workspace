import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FeatureSearchModule } from '@nx-workspace/feature-search';
import { FeatureUpgradeModule } from '@nx-workspace/feature-upgrade';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, FeatureSearchModule, FeatureUpgradeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
