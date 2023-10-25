import { Roupa } from './roupa';

export class Pacote {
  constructor(
    private _nome: string,
    private _roupas: Array<Roupa>,
    private _multiplicador: number
  ) {}

  get nome(): string {
    return this._nome;
  }

  get roupas(): Array<Roupa> {
    return this._roupas;
  }

  get multiplicador(): number {
    return this._multiplicador;
  }

  
  set nome(novoNome: string) {
    this._nome = novoNome;
  }

  set roupas(novasRoupas: Array<Roupa>) {
    this._roupas = novasRoupas;
  }

  set multiplicador(novoMultiplicador: number) {
    this._multiplicador = novoMultiplicador;
  }
}
