import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FulldataComponent }   from '../fulldata/fulldata.component';
import { RelgraphComponent }      from '../relgraph/relgraph.component';
import { SexgraphComponent }  from '../sexgraph/sexgraph.component';

const routes: Routes = [
  { path: '', redirectTo: '/sexgraph', pathMatch: 'full' },
  { path: 'fulldata', component: FulldataComponent },
  { path: 'relgraph', component: RelgraphComponent },
  { path: 'sexgraph', component: SexgraphComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}