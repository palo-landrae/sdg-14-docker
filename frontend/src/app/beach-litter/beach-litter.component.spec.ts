import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachLitterComponent } from './beach-litter.component';

describe('BeachLitterComponent', () => {
  let component: BeachLitterComponent;
  let fixture: ComponentFixture<BeachLitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeachLitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachLitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
