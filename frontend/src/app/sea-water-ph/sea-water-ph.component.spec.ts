import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaWaterPhComponent } from './sea-water-ph.component';

describe('SeaWaterPhComponent', () => {
  let component: SeaWaterPhComponent;
  let fixture: ComponentFixture<SeaWaterPhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeaWaterPhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaWaterPhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
