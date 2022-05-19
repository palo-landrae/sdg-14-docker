import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BeachLitterComponent } from './beach-litter/beach-litter.component';
import { FishStocksComponent } from './fish-stocks/fish-stocks.component';
import { HomeComponent } from './home/home.component';
import { OceanWarmingComponent } from './ocean-warming/ocean-warming.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SeaWaterPhComponent } from './sea-water-ph/sea-water-ph.component';
import { TeamComponent } from './team/team.component';
import { WriEutrophicationComponent } from './wri-eutrophication/wri-eutrophication.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'beach-litter', component: BeachLitterComponent },
  { path: 'fish-stocks', component: FishStocksComponent },
  { path: 'sea-water-ph', component: SeaWaterPhComponent },
  { path: 'eutrophication', component: WriEutrophicationComponent },
  { path: 'ocean-warming', component: OceanWarmingComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
