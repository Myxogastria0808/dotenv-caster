/**
 * The DotEnvCaster class is a utility for casting environment variables to specific types.
 *
 * @author Yuki Osada <r.rstudio.c@gmail.com>
 */
export class DotEnvCaster {
  /**
   * Creates the instance of DotEnvCaster.
   *
   * @example
   * ```ts
   * import * as dotenv from 'dotenv';
   * // Import dotenv-caster
   * import { DotEnvCaster } from 'dotenv-caster';
   *
   * dotenv.config();
   *
   * // Create an instance
   * const dotenvCaster = new DotEnvCaster();
   * ```
   */
  constructor() {}

  /**
   * Casts a `string | undefined` constant to a `string`.
   *
   * @param {string | undefined} constant - The constant to be cast.
   * @returns {string} - The casted string.
   * @throws {Error} - If the constant is undefined, the error is thrown.
   *
   * @example
   * ```ts
   * import * as dotenv from 'dotenv';
   * // Import dotenv-caster
   * import { DotEnvCaster } from 'dotenv-caster';
   *
   * dotenv.config();
   *
   * // Create an instance
   * const dotenvCaster = new DotEnvCaster();
   *
   * // string | undefined -> string
   * const stringSample: string = dotenvCaster.castString(process.env.STRING_SAMPLE);
   * ```
   */
  castString(constant: string | undefined): string {
    if (typeof constant === 'string') {
      return constant;
    } else {
      throw new Error('This type of constant is undefined. You have to set the string value in this constant.');
    }
  }

  /**
   * Casts a `number | undefined` constant to a `number`.
   *
   * @param {number | undefined} constant - The constant to be cast.
   * @returns {number} - The casted number.
   * @throws {Error} - If the constant is undefined, the error is thrown.
   *
   * @example
   * ```ts
   * import * as dotenv from 'dotenv';
   * // Import dotenv-caster
   * import { DotEnvCaster } from 'dotenv-caster';
   *
   * dotenv.config();
   *
   * // Create an instance
   * const dotenvCaster = new DotEnvCaster();
   *
   * // string | undefined -> number
   * const numberSample: number = dotenvCaster.castNumber(process.env.NUMBER_SAMPLE);
   * ```
   */
  castNumber(constant: string | undefined): number {
    if (typeof constant === 'string') {
      const result = Number(constant);
      if (isNaN(result) || !isFinite(result)) {
        throw new Error('This constant can not convert to number.');
      }
      return result;
    } else {
      throw new Error('This type of constant is undefined. You have to set the string value in this constant.');
    }
  }

  /**
   * Casts a `bigint | undefined` constant to a `bigint`.
   *
   * @param {bigint | undefined} constant - The constant to be cast.
   * @returns {bigint} - The casted bigint.
   * @throws {Error} - If the constant is undefined, the error is thrown.
   *
   * @example
   * ```ts
   * import * as dotenv from 'dotenv';
   * // Import dotenv-caster
   * import { DotEnvCaster } from 'dotenv-caster';
   *
   * dotenv.config();
   *
   * // Create an instance
   * const dotenvCaster = new DotEnvCaster();
   *
   * // string | undefined -> bigint
   * const bigIntSample: bigint = dotenvCaster.castBigInt(process.env.BIGINT_SAMPLE);
   * ```
   */
  castBigInt(constant: string | undefined): bigint {
    if (typeof constant === 'string') {
      try {
        return BigInt(constant);
      } catch {
        throw new Error('This constant can not convert to bigint.');
      }
    } else {
      throw new Error('This type of constant is undefined. You have to set the string value in this constant.');
    }
  }

  /**
   * Casts a `symbol | undefined` constant to a `symbol`.
   *
   * @param {symbol | undefined} constant - The constant to be cast.
   * @returns {symbol} - The casted symbol.
   * @throws {Error} - If the constant is undefined, the error is thrown.
   *
   * @example
   * ```ts
   * import * as dotenv from 'dotenv';
   * // Import dotenv-caster
   * import { DotEnvCaster } from 'dotenv-caster';
   *
   * dotenv.config();
   *
   * // Create an instance
   * const dotenvCaster = new DotEnvCaster();
   *
   * // string | undefined -> symbol
   * const symbolSample: symbol = dotenvCaster.castSymbol(process.env.SYMBOL_SAMPLE);
   * ```
   */
  castSymbol(constant: string | undefined): symbol {
    if (typeof constant === 'string') {
      return Symbol(constant);
    } else {
      throw new Error('This type of constant is undefined. You have to set the string value in this constant.');
    }
  }

  /**
   * Casts a `boolean | undefined` constant to a `boolean`.
   *
   * @param {boolean | undefined} constant - The constant to be cast.
   * @returns {boolean} - The casted boolean.
   * @throws {Error} - If the constant is undefined, the error is thrown.
   *
   * @example
   * ```ts
   * import * as dotenv from 'dotenv';
   * // Import dotenv-caster
   * import { DotEnvCaster } from 'dotenv-caster';
   *
   * dotenv.config();
   *
   * // Create an instance
   * const dotenvCaster = new DotEnvCaster();
   *
   * // string | undefined -> boolean
   * const booleanSample: boolean = dotenvCaster.castBoolean(process.env.BOOLEAN_SAMPLE);
   * ```
   */
  castBoolean(constant: string | undefined): boolean {
    if (typeof constant === 'string') {
      if (constant === 'true') {
        return true;
      } else if (constant === 'false') {
        return false;
      } else {
        throw new Error('This constant can not convert to boolean.');
      }
    } else {
      throw new Error('This type of constant is undefined. You have to set the string value in this constant.');
    }
  }

  /**
   * Casts a `null | undefined` constant to a `null`.
   *
   * @param {null | undefined} constant - The constant to be cast.
   * @returns {null} - The casted null.
   * @throws {Error} - If the constant is undefined, the error is thrown.
   *
   * @example
   * ```ts
   * import * as dotenv from 'dotenv';
   * // Import dotenv-caster
   * import { DotEnvCaster } from 'dotenv-caster';
   *
   * dotenv.config();
   *
   * // Create an instance
   * const dotenvCaster = new DotEnvCaster();
   *
   * // string | undefined -> null
   * const nullSample: null = dotenvCaster.castNull(process.env.NULL_SAMPLE);
   * ```
   */
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
