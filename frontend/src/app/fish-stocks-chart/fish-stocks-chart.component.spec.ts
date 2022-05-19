import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishStocksChartComponent } from './fish-stocks-chart.component';

describe('FishStocksChartComponent', () => {
  let component: FishStocksChartComponent;
  let fixture: ComponentFixture<FishStocksChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishStocksChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishStocksChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
