import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanWarmingComponent } from './ocean-warming.component';

describe('OceanWarmingComponent', () => {
  let component: OceanWarmingComponent;
  let fixture: ComponentFixture<OceanWarmingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OceanWarmingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanWarmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
