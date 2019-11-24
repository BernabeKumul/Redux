import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEnableStatusComponent } from './change-enable-status.component';

describe('ChangeEnableStatusComponent', () => {
  let component: ChangeEnableStatusComponent;
  let fixture: ComponentFixture<ChangeEnableStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeEnableStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeEnableStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
