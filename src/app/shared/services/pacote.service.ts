import { Injectable } from '@angular/core';
import { Pacote } from '../model/pacote';
import { PACOTES } from '../consts/PACOTES';

@Injectable({
  providedIn: 'root'
})
export class PacoteService {
  private _pacotes: Array<Pacote>;

  constructor() {
    this._pacotes = PACOTES;
  }

  inserir(pacote: Pacote) {
    const index = this.localizar(pacote.nome);
    if(index >= 0) throw new Error(`Pacote com id ${pacote} já existente`);

    this._pacotes.push(pacote);
  }

  listar(): Array<Pacote> {
    return this._pacotes;
  }

  //TODO: update

  remover(nome: string): boolean {
    const index = this.localizar(nome);

    if(index >= 0) {
      this._pacotes.splice(index, 1);

      return true;
    }

    return false;
  }

  localizar(nome: string) {
    return this._pacotes.findIndex(pacote => pacote.nome === nome)
  }
}
