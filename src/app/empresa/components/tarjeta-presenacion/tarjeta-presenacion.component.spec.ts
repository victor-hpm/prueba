import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPresenacionComponent } from './tarjeta-presenacion.component';

describe('TarjetaPresenacionComponent', () => {
  let component: TarjetaPresenacionComponent;
  let fixture: ComponentFixture<TarjetaPresenacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaPresenacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaPresenacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
