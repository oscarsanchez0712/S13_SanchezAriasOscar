import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { HuespedesComponent } from './pages/huespedes/huespedes.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'habitaciones', component: HabitacionesComponent },
      { path: 'huespedes', component: HuespedesComponent },
      { path: 'reservas', component: ReservasComponent },
      { path: '**', component: NoEncontradoComponent }
    ]
  }
];