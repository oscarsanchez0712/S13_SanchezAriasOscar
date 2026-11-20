import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

interface Usuario {
  nombre: string;
  correo: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private router = inject(Router);
  private readonly CLAVE = 'sesion_hotel';
  private readonly CLAVE_USUARIOS = 'usuarios_hotel';

  // Administrador por defecto (solo con fines educativos)
  private readonly admin: Usuario = {
    correo: 'admin@hotelvallereal.pe',
    password: 'admin123',
    nombre: 'Administrador'
  };

  // ---------- Usuarios registrados ----------
  private obtenerUsuarios(): Usuario[] {
    try {
      return JSON.parse(localStorage.getItem(this.CLAVE_USUARIOS) ?? '[]');
    } catch {
      return [];
    }
  }

  private buscarUsuario(correo: string, password: string): Usuario | null {
    const email = correo.trim().toLowerCase();
    const todos = [this.admin, ...this.obtenerUsuarios()];
    return todos.find(u => u.correo === email && u.password === password) ?? null;
  }

  registrar(nombre: string, correo: string, password: string): boolean {
    const email = correo.trim().toLowerCase();
    const existe = email === this.admin.correo
      || this.obtenerUsuarios().some(u => u.correo === email);
    if (existe) return false;

    const usuarios = this.obtenerUsuarios();
    usuarios.push({ nombre: nombre.trim(), correo: email, password });
    localStorage.setItem(this.CLAVE_USUARIOS, JSON.stringify(usuarios));
    return true;
  }

  // ---------- Sesión ----------
  validarCredenciales(correo: string, password: string): boolean {
    return this.buscarUsuario(correo, password) !== null;
  }

  login(correo: string, password: string): boolean {
    const usuario = this.buscarUsuario(correo, password);
    if (!usuario) return false;
    localStorage.setItem(this.CLAVE, JSON.stringify({
      correo: usuario.correo,
      nombre: usuario.nombre
    }));
    return true;
  }

  estaAutenticado(): boolean {
    return localStorage.getItem(this.CLAVE) !== null;
  }

  usuarioActual(): { correo: string; nombre: string } | null {
    const dato = localStorage.getItem(this.CLAVE);
    return dato ? JSON.parse(dato) : null;
  }

  logout(): void {
    localStorage.removeItem(this.CLAVE);
    this.router.navigate(['/login']);
  }
}
