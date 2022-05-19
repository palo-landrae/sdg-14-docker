import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BeachLitter } from '../models/beach_litter.model';
import { ChartData } from '../models/chart.model';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-beach-litter-chart',
  templateUrl: './beach-litter-chart.component.html',
  styleUrls: ['./beach-litter-chart.component.scss'],
})
export class BeachLitterChartComponent implements OnInit {
  obsBeachLitter: Observable<BeachLitter[]>;
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
          'EN_MAR_BEALITSQ',
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

  prepareBeachLitterData = (data: BeachLitter[]) => {
    this.tempData = [];
    for (var i in data) {
      this.tempData.push([
        data[i]['Entity'],
        Math.log(data[i]['EN_MAR_BEALITSQ']),
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
    this.obsBeachLitter = this.http.get<BeachLitter[]>(
      `https://palo-landrae-sdg-14.herokuapp.com/data/beach_litter/${anno.sliderValue}`
    );
    this.obsBeachLitter.subscribe(this.prepareBeachLitterData);
    return false;
  }

  ngOnInit(): void {
    this.obsBeachLitter = this.http.get<BeachLitter[]>(
      `https://palo-landrae-sdg-14.herokuapp.com/data/beach_litter/2020`
    );
    this.obsBeachLitter.subscribe(this.prepareBeachLitterData);
  }
}
