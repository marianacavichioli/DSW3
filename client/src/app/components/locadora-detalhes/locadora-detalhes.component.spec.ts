import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocadoraDetalhesComponent } from './locadora-detalhes.component';

describe('LocadoraDetalhesComponent', () => {
  let component: LocadoraDetalhesComponent;
  let fixture: ComponentFixture<LocadoraDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocadoraDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocadoraDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
