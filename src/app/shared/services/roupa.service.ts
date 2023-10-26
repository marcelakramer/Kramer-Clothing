import { Injectable } from '@angular/core';
import { Roupa } from '../model/roupa';
import { ROUPAS } from '../consts/ROUPAS';

@Injectable({
  providedIn: 'root'
})
export class RoupaService {
  private _roupas: Array<Roupa>;

  constructor() {
    this._roupas = ROUPAS;
  }

  inserir(roupa: Roupa) {
    const index = this.localizar(roupa.id);
    if(index >= 0) throw new Error(`Roupa com id ${roupa} já existente`);

    this._roupas.push(roupa);
  }

  listar(): Array<Roupa> {
    return this._roupas;
  }

  //TODO: update

  remover(id: number): boolean {
    const index = this.localizar(id);

    if(index >= 0) {
      this._roupas.splice(index, 1);

      return true;
    }

    return false;
  }

  localizar(id: number) {
    return this._roupas.findIndex(roupa => roupa.id === id)
  }
}
