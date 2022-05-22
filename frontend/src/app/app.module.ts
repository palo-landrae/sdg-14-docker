import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';
import { AppComponent } from './app.component';
import { BeachLitterChartComponent } from './beach-litter-chart/beach-litter-chart.component';
import { BeachLitterComponent } from './beach-litter/beach-litter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FishStocksChartComponent } from './fish-stocks-chart/fish-stocks-chart.component';
import { FishStocksComponent } from './fish-stocks/fish-stocks.component';
import { SeaWaterPhComponent } from './sea-water-ph/sea-water-ph.component';
import { SeaWaterPhChartComponent } from './sea-water-ph-chart/sea-water-ph-chart.component';
import { WriEutrophicationChartComponent } from './wri-eutrophication-chart/wri-eutrophication-chart.component';
import { WriEutrophicationComponent } from './wri-eutrophication/wri-eutrophication.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { OceanWarmingComponent } from './ocean-warming/ocean-warming.component';
import { OceanWarmingChartComponent } from './ocean-warming-chart/ocean-warming-chart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './contact.service';
import { NgHcaptchaModule } from 'ng-hcaptcha';
import { ThemeButtonComponent } from './theme-button/theme-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BeachLitterComponent,
    BeachLitterChartComponent,
    NavbarComponent,
    FishStocksChartComponent,
    FishStocksComponent,
    SeaWaterPhComponent,
    SeaWaterPhChartComponent,
    WriEutrophicationChartComponent,
    WriEutrophicationComponent,
    PageNotFoundComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    TeamComponent,
    OceanWarmingComponent,
    OceanWarmingChartComponent,
    ThemeButtonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GoogleChartsModule,
    NgxSliderModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgHcaptchaModule.forRoot({
      siteKey: '25efa2c0-04d7-4b5f-9292-d797da28d2d3',
    }),
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule { }
