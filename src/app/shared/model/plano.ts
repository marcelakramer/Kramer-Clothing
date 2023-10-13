export class Plano {
  constructor(
    private _nome: string,
    private _preco: number,
    private _numPecas: number
  ) {}

  get nome(): string {
    return this._nome;
  }

  set nome(novoNome: string) {
    this._nome = novoNome;
  }

  get preco(): number {
    return this._preco;
  }

  set preco(novoPreco: number) {
    this._preco = novoPreco;
  }

  get numPecas(): number {
    return this._numPecas;
  }

  set numPecas(novoNumPecas: number) {
    this._numPecas = novoNumPecas;
  }
}
