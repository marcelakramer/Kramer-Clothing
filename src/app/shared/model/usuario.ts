export class Usuario {
  constructor(
    private _nome: string,
    private _email: string,
    private _senha: string
  ) {}

  get nome(): string {
    return this._nome;
  }

  get email(): string {
    return this._email;
  }

  get senha(): string {
    return this._senha;
  }

  
  set nome(novoNome: string) {
    this._nome = novoNome;
  }

  set email(novoEmail: string) {
    this._email = novoEmail;
  }

  set senha(novaSenha: string) {
    this._senha = novaSenha;
  }
}
