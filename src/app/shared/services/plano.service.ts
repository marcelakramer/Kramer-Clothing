import { Injectable } from '@angular/core';
import { Plano } from '../model/plano';
import { PLANOS } from '../consts/PLANOS';

@Injectable({
  providedIn: 'root'
})
export class PlanoService {
  private _planos: Array<Plano>;

  constructor() {
    this._planos = PLANOS;
  }

  inserir(plano: Plano) {
    const index = this.localizar(plano.id);
    if(index >= 0) throw new Error(`Plano com id ${plano} já existente`);

    this._planos.push(plano);
  }

  listar(): Array<Plano> {
    return this._planos;
  }

  //TODO: update

  remover(id: number): boolean {
    const index = this.localizar(id);

    if(index >= 0) {
      this._planos.splice(index, 1);

      return true;
    }

    return false;
  }

  localizar(id: number) {
    return this._planos.findIndex(plano => plano.id === id)
  }
}
