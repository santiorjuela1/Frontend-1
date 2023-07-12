import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaTablasComponent } from './prueba-tablas.component';

describe('PruebaTablasComponent', () => {
  let component: PruebaTablasComponent;
  let fixture: ComponentFixture<PruebaTablasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaTablasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaTablasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
