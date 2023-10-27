import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService extends BaseService<Usuario> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:3000/usuario');
  }
}
