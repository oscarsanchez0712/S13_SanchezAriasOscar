import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

function coincidenPasswords(group: AbstractControl): ValidationErrors | null {
  const pass = group.get('password')?.value;
  const conf = group.get('confirmar')?.value;
  return pass === conf ? null : { noCoincide: true };
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  modo: 'login' | 'registro' = 'login';
  verPassword = false;
  cargando = false;
  error = '';
  exito = '';

  form = this.fb.nonNullable.group({
    correo: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  formRegistro = this.fb.nonNullable.group(
    {
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmar: ['', Validators.required]
    },
    { validators: coincidenPasswords }
  );

  cambiarModo(modo: 'login' | 'registro') {
    this.modo = modo;
    this.error = '';
    this.exito = '';
    this.verPassword = false;
  }

  ingresar() {
    this.error = '';
    this.exito = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.cargando = true;
    setTimeout(() => {
      const { correo, password } = this.form.getRawValue();
      if (this.auth.login(correo, password)) {
        this.router.navigate(['/inicio']);
      } else {
        this.error = 'Correo o contraseña incorrectos.';
      }
      this.cargando = false;
    }, 600);
  }

  registrar() {
    this.error = '';
    this.exito = '';
    if (this.formRegistro.invalid) {
      this.formRegistro.markAllAsTouched();
      return;
    }
    this.cargando = true;
    setTimeout(() => {
      const { nombre, correo, password } = this.formRegistro.getRawValue();
      if (this.auth.registrar(nombre, correo, password)) {
        this.formRegistro.reset();
        this.form.patchValue({ correo });
        this.cambiarModo('login');
        this.exito = 'Cuenta creada. Ahora inicia sesión.';
      } else {
        this.error = 'Ya existe una cuenta con ese correo.';
      }
      this.cargando = false;
    }, 600);
  }
}