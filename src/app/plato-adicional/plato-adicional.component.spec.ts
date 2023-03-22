import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatoAdicionalComponent } from './plato-adicional.component';

describe('PlatoAdicionalComponent', () => {
  let component: PlatoAdicionalComponent;
  let fixture: ComponentFixture<PlatoAdicionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatoAdicionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatoAdicionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
