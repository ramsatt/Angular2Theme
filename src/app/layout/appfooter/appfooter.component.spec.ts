/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppfooterComponent } from './appfooter.component';

describe('AppfooterComponent', () => {
  let component: AppfooterComponent;
  let fixture: ComponentFixture<AppfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
