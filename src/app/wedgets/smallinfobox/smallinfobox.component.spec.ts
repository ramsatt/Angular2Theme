/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmallinfoboxComponent } from './smallinfobox.component';

describe('SmallinfoboxComponent', () => {
  let component: SmallinfoboxComponent;
  let fixture: ComponentFixture<SmallinfoboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallinfoboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallinfoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
