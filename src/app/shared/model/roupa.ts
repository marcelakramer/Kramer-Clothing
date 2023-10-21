import { Pacote } from "./pacote";

export class Roupa {
    constructor(
      private _id: number,
      private _marca: string,
      private _tamanho: string,
      private _cor: string,
      private _material: string,
      private _pacote: Pacote | null = null
    ) {}

    get id(): number {
      return this._id;
    }

    get marca(): string {
      return this._marca;
    }

    get tamanho(): string {
      return this._tamanho;
    }

    get cor(): string {
      return this._cor;
    }

    get material(): string {
      return this._material;
    }

    get pacote(): Pacote | null {
      return this._pacote;
    }

    set marca(novaMarca: string) {
      this._marca = novaMarca;
    }

    set tamanho(novoTamanho: string) {
      this._tamanho = novoTamanho;
    }

    set cor(novaCor: string) {
      this._cor = novaCor;
    }

    set material(novoMaterial: string) {
      this._material = novoMaterial;
    }

    set pacote(novoPacote: Pacote | null) {
      this._pacote = novoPacote;
    }
  }
