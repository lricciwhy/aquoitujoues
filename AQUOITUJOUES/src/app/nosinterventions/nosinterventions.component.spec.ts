import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosinterventionsComponent } from './nosinterventions.component';

describe('NosinterventionsComponent', () => {
  let component: NosinterventionsComponent;
  let fixture: ComponentFixture<NosinterventionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosinterventionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosinterventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
