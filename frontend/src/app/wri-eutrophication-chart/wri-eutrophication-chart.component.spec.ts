import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriEutrophicationChartComponent } from './wri-eutrophication-chart.component';

describe('WriEutrophicationChartComponent', () => {
  let component: WriEutrophicationChartComponent;
  let fixture: ComponentFixture<WriEutrophicationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriEutrophicationChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriEutrophicationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
