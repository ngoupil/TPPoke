import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightsPage } from './fights.page';

describe('FightsPage', () => {
  let component: FightsPage;
  let fixture: ComponentFixture<FightsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
