import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbaccessComponent } from './dbaccess.component';

describe('DbaccessComponent', () => {
  let component: DbaccessComponent;
  let fixture: ComponentFixture<DbaccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbaccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
