import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HabitacionesComponent } from './habitaciones.component';

describe('HabitacionesComponent', () => {
  let component: HabitacionesComponent;
  let fixture: ComponentFixture<HabitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitacionesComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
