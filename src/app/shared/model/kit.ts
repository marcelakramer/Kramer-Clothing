import { Clothing } from './clothing';

export class Kit {
  constructor(
    private _name: string,
    private _clothes: Array<Clothing>,
    private _factor: number
  ) {}

  get name(): string {
    return this._name;
  }

  get clothes(): Array<Clothing> {
    return this._clothes;
  }

  get factor(): number {
    return this._factor;
  }

  set name(newName: string) {
    this._name = newName;
  }

  set clothes(newClothes: Array<Clothing>) {
    this._clothes = newClothes;
  }

  set factor(newFactor: number) {
    this._factor = newFactor;
  }
}
