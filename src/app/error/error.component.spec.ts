import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponent } from './error.component';
import { MAT_DIALOG_DATA } from '@angular/material';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;
  let servie: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorComponent ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorComponent);
    //servie = fixture.debugElement.injector.get(MAT_DIALOG_DATA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
