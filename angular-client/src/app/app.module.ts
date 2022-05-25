import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThemeButtonComponent } from './theme-button/theme-button.component';
import { BeachLitterComponent } from './beach-litter/beach-litter.component';
import { BeachLitterChartComponent } from './beach-litter/beach-litter-chart/beach-litter-chart.component';
import { IndicatorsDropdownComponent } from './indicators-dropdown/indicators-dropdown.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThemeButtonComponent,
    BeachLitterComponent,
    BeachLitterChartComponent,
    IndicatorsDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSliderModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
