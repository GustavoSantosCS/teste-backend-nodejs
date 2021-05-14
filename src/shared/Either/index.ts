export type Either<L, R> = Left<L, R> | Right<L, R>;

class Left<L, R> {
  readonly value: L;

  constructor(value: L) {
    this.value = value;
  }

  isLeft(): this is Left<L, R> {
    return true;
  }

  isRight(): this is Right<L, R> {
    return false;
  }
}

class Right<L, R> {
  readonly value: R;

  constructor(value: R) {
    this.value = value;
  }

  isLeft(): this is Left<L, R> {
    return false;
  }

  isRight(): this is Right<L, R> {
    return true;
  }
}

export const left = <L, R>(valueOfLeft: L): Either<L, R> =>
  new Left<L, R>(valueOfLeft);

export const right = <L, R>(valueOfRight: R): Either<L, R> =>
  new Right<L, R>(valueOfRight);
