/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppheaderComponent } from './appheader.component';

describe('AppheaderComponent', () => {
  let component: AppheaderComponent;
  let fixture: ComponentFixture<AppheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
