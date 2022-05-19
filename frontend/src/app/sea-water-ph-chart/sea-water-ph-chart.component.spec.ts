import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaWaterPhChartComponent } from './sea-water-ph-chart.component';

describe('SeaWaterPhChartComponent', () => {
  let component: SeaWaterPhChartComponent;
  let fixture: ComponentFixture<SeaWaterPhChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeaWaterPhChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaWaterPhChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
