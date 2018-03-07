import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogodeuxComponent } from './logodeux.component';

describe('LogodeuxComponent', () => {
  let component: LogodeuxComponent;
  let fixture: ComponentFixture<LogodeuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogodeuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogodeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
