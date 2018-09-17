import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNoticiaComponent } from './lista-noticia.component';

describe('ListaNoticiaComponent', () => {
  let component: ListaNoticiaComponent;
  let fixture: ComponentFixture<ListaNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
