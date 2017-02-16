/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppmenuComponent } from './appmenu.component';

describe('AppmenuComponent', () => {
  let component: AppmenuComponent;
  let fixture: ComponentFixture<AppmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
