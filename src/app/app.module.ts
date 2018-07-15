import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SexdistService } from './sexdist.service';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { RelgraphComponent } from './relgraph/relgraph.component';
import { SexgraphComponent } from './sexgraph/sexgraph.component';
import { FulldataComponent } from './fulldata/fulldata.component';
//import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppRoutingModule }     from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RelgraphComponent,
    SexgraphComponent,
    FulldataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SexdistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
