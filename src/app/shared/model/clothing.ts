import { Kit } from "./kit";

export class Clothing {
    constructor(
      private _brand: string,
      private _size: string,
      private _color: string,
      private _material: string,
      private _kit: Kit | null = null
    ) {}

    get brand(): string {
      return this._brand;
    }

    get size(): string {
      return this._size;
    }

    get color(): string {
      return this._color;
    }

    get material(): string {
      return this._material;
    }

    get kit(): Kit | null {
      return this._kit;
    }

    set brand(newBrand: string) {
      this._brand = newBrand;
    }

    set size(newSize: string) {
      this._size = newSize;
    }

    set color(newColor: string) {
      this._color = newColor;
    }

    set material(newMaterial: string) {
      this._material = newMaterial;
    }

    set kit(newKit: Kit | null) {
      this._kit = newKit;
    }
  }
