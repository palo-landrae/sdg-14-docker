import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartData } from '../models/chart.model';
import { SeaWaterPh } from '../models/sea-water-ph.model';

@Component({
  selector: 'app-sea-water-ph-chart',
  templateUrl: './sea-water-ph-chart.component.html',
  styleUrls: ['./sea-water-ph-chart.component.css'],
})
export class SeaWaterPhChartComponent implements OnInit {
  obsSeaWaterPh: Observable<SeaWaterPh[]>;
  chartDataArray: ChartData[] = [];
  chartData = [];
  tempData = [];

  constructor(public http: HttpClient) {
    this.chartDataArray.push(
      new ChartData(
        'Average Sea Water ph',
        'LineChart',
        [],
        ['Day', 'Monthly pH measurement', 'Annual average'],
        {
          width: 960,
          height: 480,
          chartArea: { left: 10, top: 10, bottom: 0, height: '100%' },
          colors: ['#E44C44', '#5C5C74'],
          isStacked: 'percent',
          focusTarget: 'category',
          crosshair: {
            orientation: 'vertical',
            trigger: 'focus',
          },
          legend: {
            position: "in",
            alignment: "end"
          }
        }
      )
    );
  }

  prepareSeaWaterPhData = (data: SeaWaterPh[]) => {
    this.tempData = [];
    for (var i in data) {
      this.tempData.push([
        data[i]['Day'],
        data[i]['ocean_ph'],
        data[i]['ocean_ph_yearly_average'],
      ]);
    }
    this.chartData = this.tempData;
    this.chartDataArray[0].data = this.chartData;
  };

  ngOnInit(): void {
    this.obsSeaWaterPh = this.http.get<SeaWaterPh[]>(
      `https://palo-landrae-sdg-14.herokuapp.com/data/mean_seawater_ph`
    );
    this.obsSeaWaterPh.subscribe(this.prepareSeaWaterPhData);
  }
}
