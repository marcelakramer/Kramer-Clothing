export class User {

  constructor(
    private _name: string,
    private _email: string,
    private _password: string
  ) { }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  set name(newName: string) {
    this._name = newName;
  }

  set email(newEmail: string) {
    this._email = newEmail;
  }

  set password(newPassword: string) {
    this._password = newPassword;
  }
}
