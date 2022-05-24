import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorsDropdownComponent } from './indicators-dropdown.component';

describe('IndicatorsDropdownComponent', () => {
  let component: IndicatorsDropdownComponent;
  let fixture: ComponentFixture<IndicatorsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorsDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
