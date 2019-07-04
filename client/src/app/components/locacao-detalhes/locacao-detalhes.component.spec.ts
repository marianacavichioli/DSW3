import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocacaoDetalhesComponent } from './locacao-detalhes.component';

describe('LocacaoDetalhesComponent', () => {
  let component: LocacaoDetalhesComponent;
  let fixture: ComponentFixture<LocacaoDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocacaoDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocacaoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
