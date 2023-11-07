export class Plan {
  constructor(
    private _duration: number,
    private _basePrice: number,
    private _numOfClothes: number
  ) {}

  get duration(): number {
    return this._duration;
  }

  set duration(newDuration: number) {
    this._duration = newDuration;
  }

  get basePrice(): number {
    return this._basePrice;
  }

  set basePrice(newBasePrice: number) {
    this._basePrice = newBasePrice;
  }

  get numOfClothes(): number {
    return this._numOfClothes;
  }

  set numOfClothes(newNumOfClothes: number) {
    this._numOfClothes = newNumOfClothes;
  }
}
