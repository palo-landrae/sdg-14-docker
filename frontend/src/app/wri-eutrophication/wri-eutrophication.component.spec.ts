import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriEutrophicationComponent } from './wri-eutrophication.component';

describe('WriEutrophicationComponent', () => {
  let component: WriEutrophicationComponent;
  let fixture: ComponentFixture<WriEutrophicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriEutrophicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriEutrophicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
