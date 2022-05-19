import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OceanAnomaly } from '../models/ocean-warming.model';
import { ChartData } from '../models/chart.model';
import { Options } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-ocean-warming-chart',
  templateUrl: './ocean-warming-chart.component.html',
  styleUrls: ['./ocean-warming-chart.component.css']
})
export class OceanWarmingChartComponent implements OnInit {
  obsOceanAnomaly: Observable<OceanAnomaly[]>;
  chartDataArray: ChartData[] = [];
  chartData = [];
  tempData = [];

  sliderValue: number = 2020;
  sliderOptions: Options = {
    floor: 2015,
    ceil: 2020,
    showTicks: true,
  };
  constructor(public http: HttpClient) {
    this.chartDataArray.push(
      new ChartData(
        'Beach litter per square km',  // title
        'GeoChart',         // type
        [],                 // data
        [                   // columns
          'State',
          'annual_sea_surface_temperature_anomaly',
          { role: 'tooltip', type: 'string', p: { html: true } },
        ],
        {                   // options
          width: 720,
          height: 480,
          chartArea: { left: 10, top: 10, bottom: 0, height: '100%' },
          displayMode: 'regions',
          colorAxis: {
            colors: [
              '#F7FCFD',
              '#E0ECF4',
              '#BED3E7',
              '#9FBCDB',
              '#8D96C7',
              '#8D6BB0',
              '#88419D',
              '#6F016A',
            ],
          },
          legend: 'none',
          tooltip: {
            isHtml: true,
          },
        }
      )
    );
  }

  prepareOceanAnomalyData = (data: OceanAnomaly[]) => {
    this.tempData = [];
    for (var i in data) {
      this.tempData.push([
        data[i]['Entity'],
        Math.log(data[i]['annual_sea_surface_temperature_anomaly']),
        `
        <div>
        <h6 style="color: #6F016A;">${data[i]['EN_MAR_BEALITSQ'].toLocaleString('de-DE')} plastic items per square km </h6>
        <p style="margin-top: -8px">${String(data[i]['Year'])}</p>
        </div>
        `,
      ]);
    }
    this.chartData = this.tempData;
    this.chartDataArray[0].data = this.chartData;
  };
  cambiaAnno(anno): boolean {
    this.obsOceanAnomaly = this.http.get<OceanAnomaly[]>(
      `https://palo-landrae-sdg-14.herokuapp.com/data/beach_litter/${anno.sliderValue}`
    );
    this.obsOceanAnomaly.subscribe(this.prepareOceanAnomalyData);
    return false;
  }
  
  ngOnInit(): void {
    this.obsOceanAnomaly = this.http.get<OceanAnomaly[]>(
      `https://palo-landrae-sdg-14.herokuapp.com/data/beach_litter/2020`
    );
    this.obsOceanAnomaly.subscribe(this.prepareOceanAnomalyData);
  }

}

