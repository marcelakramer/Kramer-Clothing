import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { USUARIOS } from '../consts/USUARIO';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private _usuarios: Array<Usuario>;

  constructor() {
    this._usuarios = USUARIOS
  }

  inserir(usuario: Usuario) {
    const index = this.localizar(usuario.email);
    if(index >= 0) throw new Error(`Usuário com email ${usuario.email} já existente`);

    this._usuarios.push(usuario);
  }

  listar(): Array<Usuario> {
    return this._usuarios;
  }

  //TODO: update

  remover(email: string): boolean {
    const index = this.localizar(email);

    if(index >= 0) {
      this._usuarios.splice(index, 1);

      return true;
    }

    return false;
  }

  localizar(email: string) {
    return this._usuarios.findIndex(usuario => usuario.email === email)
  }
}
