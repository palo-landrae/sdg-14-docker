import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanWarmingChartComponent } from './ocean-warming-chart.component';

describe('OceanWarmingChartComponent', () => {
  let component: OceanWarmingChartComponent;
  let fixture: ComponentFixture<OceanWarmingChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OceanWarmingChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanWarmingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
