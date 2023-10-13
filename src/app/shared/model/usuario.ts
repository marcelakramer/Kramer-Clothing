export class Usuario {
  constructor(
    private _nome: string,
    private _email: string,
    private _senha: string
  ) {}

  get nome(): string {
    return this._nome;
  }

  set nome(novoNome: string) {
    this._nome = novoNome;
  }

  get email(): string {
    return this._email;
  }

  set email(novoEmail: string) {
    this._email = novoEmail;
  }

  get senha(): string {
    return this._senha;
  }

  set senha(novaSenha: string) {
    this._senha = novaSenha;
  }
}
