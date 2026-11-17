import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HuespedesComponent } from './huespedes.component';

describe('HuespedesComponent', () => {
  let component: HuespedesComponent;
  let fixture: ComponentFixture<HuespedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HuespedesComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HuespedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
