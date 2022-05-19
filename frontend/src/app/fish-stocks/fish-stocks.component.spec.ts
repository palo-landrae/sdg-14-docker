import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishStocksComponent } from './fish-stocks.component';

describe('FishStocksComponent', () => {
  let component: FishStocksComponent;
  let fixture: ComponentFixture<FishStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishStocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
