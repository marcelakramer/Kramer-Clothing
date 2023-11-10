import { Clothing } from './clothing';

export class Kit {
  constructor (
    public id: string,
    public name: string,
    public clothes: Array<Clothing>,
    public factor: number
  ) {}
}
