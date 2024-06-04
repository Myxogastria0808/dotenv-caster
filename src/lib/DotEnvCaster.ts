export class DotEnvCaster {
  castString(constant: string | undefined): string {
    if (typeof constant === 'string') {
      return constant;
    } else {
      throw new Error('This type of constant is undefined. You have to set the string value in this constant.');
    }
  }
  castNumber(constant: string | undefined): number {
    if (typeof constant === 'string') {
      try {
        return Number(constant);
      } catch (_e) {
        throw new Error('This constant can not convert to number.');
      }
    } else {
      throw new Error('This type of constant is undefined. You have to set the string value in this constant.');
    }
  }
  castBigInt(constant: string | undefined): bigint {
    if (typeof constant === 'string') {
      try {
        return BigInt(constant);
      } catch (_e) {
        throw new Error('This constant can not convert to bigint.');
      }
    } else {
      throw new Error('This type of constant is undefined. You have to set the string value in this constant.');
    }
  }
  castSymbol(constant: string | undefined): symbol {
    if (typeof constant === 'string') {
      try {
        return Symbol(constant);
      } catch (_e) {
        throw new Error('This constant can not convert to symbol.');
      }
    } else {
      throw new Error('This type of constant is undefined. You have to set the string value in this constant.');
    }
  }
  castBoolean(constant: string | undefined): boolean {
    if (typeof constant === 'string') {
      try {
        return Boolean(constant);
      } catch (_e) {
        throw new Error('This constant can not convert to boolean.');
      }
    } else {
      throw new Error('This type of constant is undefined. You have to set the string value in this constant.');
    }
  }
  castNull(constant: string | undefined): null {
    if (typeof constant === 'string') {
      if (constant === 'null') {
        return null;
      } else {
        throw new Error('This constant can not convert to null.');
      }
    } else {
      throw new Error('This type of constant is undefined. You have to set the string value in this constant.');
    }
  }
}
