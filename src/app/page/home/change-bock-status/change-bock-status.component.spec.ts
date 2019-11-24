import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBockStatusComponent } from './change-bock-status.component';

describe('ChangeBockStatusComponent', () => {
  let component: ChangeBockStatusComponent;
  let fixture: ComponentFixture<ChangeBockStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeBockStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeBockStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
