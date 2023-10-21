export class Plano {
  constructor(
    private _duracao: number,
    private _precoBase: number,
    private _numPecas: number
  ) {}

  get duracao(): number {
    return this._duracao;
  }

  set duracao(novaDuracao: number) {
    this._duracao = novaDuracao;
  }

  get precoBase(): number {
    return this._precoBase;
  }

  set precoBase(novoPrecoBase: number) {
    this._precoBase = novoPrecoBase;
  }

  get numPecas(): number {
    return this._numPecas;
  }

  set numPecas(novoNumPecas: number) {
    this._numPecas = novoNumPecas;
  }
}
