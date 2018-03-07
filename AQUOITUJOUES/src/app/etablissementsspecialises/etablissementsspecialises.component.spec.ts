import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtablissementsspecialisesComponent } from './etablissementsspecialises.component';

describe('EtablissementsspecialisesComponent', () => {
  let component: EtablissementsspecialisesComponent;
  let fixture: ComponentFixture<EtablissementsspecialisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtablissementsspecialisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtablissementsspecialisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
