import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocacaoEdicaoComponent } from './locacao-edicao.component';

describe('LocacaoEdicaoComponent', () => {
  let component: LocacaoEdicaoComponent;
  let fixture: ComponentFixture<LocacaoEdicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocacaoEdicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocacaoEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
