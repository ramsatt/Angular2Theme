/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconinfoboxComponent } from './iconinfobox.component';

describe('IconinfoboxComponent', () => {
  let component: IconinfoboxComponent;
  let fixture: ComponentFixture<IconinfoboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconinfoboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconinfoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
