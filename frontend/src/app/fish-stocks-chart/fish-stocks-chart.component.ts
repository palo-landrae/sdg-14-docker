import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartData } from '../models/chart.model';
import { FishStocks } from '../models/fish_stocks.model';

@Component({
  selector: 'app-fish-stocks-chart',
  templateUrl: './fish-stocks-chart.component.html',
  styleUrls: ['./fish-stocks-chart.component.css'],
})
export class FishStocksChartComponent implements OnInit {
  obsFishStocks: Observable<FishStocks[]>;
  chartDataArray: ChartData[] = [];
  chartData = [];
  tempData = [];

  constructor(public http: HttpClient) {
    this.chartDataArray.push(
      new ChartData(
        'Fish Stocks',
        'AreaChart',
        [],
        ['Year', 'Overexploited', 'Sustainable'],
        {
          width: 480,
          height: 280,
          chartArea: { left: 10, top: 10, bottom: 0, height: '100%' },
          colors: ['#cc0000', '#9FBCDB'],
          isStacked: 'percent',
          focusTarget: 'category',
          crosshair: {
            orientation: 'vertical',
            trigger: 'focus',
          },
        }
      )
    );
  }

  prepareFishStocksData = (data: FishStocks[]) => {
    this.tempData = [];
    for (var i in data) {
      this.tempData.push([
        data[i]['Year'],
        data[i]['Overexploited_fish_stocks'],
        data[i]['Sustainable_fish_stocks'],
      ]);
    }
    this.chartData = this.tempData;
    this.chartDataArray[0].data = this.chartData;
  };

  ngOnInit(): void {
    this.obsFishStocks = this.http.get<FishStocks[]>(
      `https://palo-landrae-sdg-14.herokuapp.com/data/fish_stocks`
    );
    this.obsFishStocks.subscribe(this.prepareFishStocksData);
  }
}
