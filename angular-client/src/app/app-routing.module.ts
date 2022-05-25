import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeachLitterComponent } from './beach-litter/beach-litter.component';

const routes: Routes = [
  { path: 'beach-litter', component: BeachLitterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
