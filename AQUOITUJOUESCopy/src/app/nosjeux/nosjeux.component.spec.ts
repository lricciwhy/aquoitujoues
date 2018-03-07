import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosjeuxComponent } from './nosjeux.component';

describe('NosjeuxComponent', () => {
  let component: NosjeuxComponent;
  let fixture: ComponentFixture<NosjeuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosjeuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosjeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
