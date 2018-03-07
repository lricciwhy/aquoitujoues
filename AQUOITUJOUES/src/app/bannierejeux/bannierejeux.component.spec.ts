import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannierejeuxComponent } from './bannierejeux.component';

describe('BannierejeuxComponent', () => {
  let component: BannierejeuxComponent;
  let fixture: ComponentFixture<BannierejeuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannierejeuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannierejeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
