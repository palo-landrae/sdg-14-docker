import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartData } from '../models/chart.model';
import { Eutrophication } from '../models/wri-eutrophication.model';

@Component({
  selector: 'app-wri-eutrophication-chart',
  templateUrl: './wri-eutrophication-chart.component.html',
  styleUrls: ['./wri-eutrophication-chart.component.css'],
})
export class WriEutrophicationChartComponent implements OnInit {
  obsEutrophication: Observable<Eutrophication[]>;
  chartDataArray: ChartData[] = [];
  chartData = [];
  tempData = [];

  constructor(public http: HttpClient) {
    this.chartDataArray.push(
      new ChartData(
        'Eutrophication',
        'GeoChart',
        [],
        ['Lat', 'Lng', 'Classification'],
        {
          width: 720,
          height: 480,
          chartArea: { left: 10, top: 10, bottom: 0, height: '100%' },
          displayMode: 'markers',
          sizeAxis: {
            minSize: 6,
            maxSize: 6,
          },
          datalessRegionColor: '#9FBCDB',
          colorAxis: {
            values: [0, 1, 2],
            colors: ['#4b781e', '#938887', '#c3365e'],
          },
          legend: 'none',
          tooltip: {
            isHtml: true,
          },
          region: "world"
        }
      )
    );
  }

  prepareEutrophicationData = (data: Eutrophication[]) => {
    this.tempData = [];
    for (var i in data) {
      this.tempData.push([
        data[i]['Lat'],
        data[i]['Lng'],
        data[i]['n_classification'],
      ]);
    }
    this.chartData = this.tempData;
    this.chartDataArray[0].data = this.chartData;
  };

  cambiaAnno(anno): boolean {
    this.obsEutrophication = this.http.get<Eutrophication[]>(
      `https://palo-landrae-sdg-14.herokuapp.com/data/wri_eutrophication/${anno.sliderValue}`
    );
    this.obsEutrophication.subscribe(this.prepareEutrophicationData);
    return false;
  }

  ngOnInit(): void {
    this.obsEutrophication = this.http.get<Eutrophication[]>(
      `https://palo-landrae-sdg-14.herokuapp.com/data/wri_eutrophication/2000`
    );
    this.obsEutrophication.subscribe(this.prepareEutrophicationData);
  }
}
