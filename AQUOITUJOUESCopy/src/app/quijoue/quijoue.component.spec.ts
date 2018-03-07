import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuijoueComponent } from './quijoue.component';

describe('QuijoueComponent', () => {
  let component: QuijoueComponent;
  let fixture: ComponentFixture<QuijoueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuijoueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuijoueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
