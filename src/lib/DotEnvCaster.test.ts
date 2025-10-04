import { describe, expect, expectTypeOf, test } from 'vitest';
import * as dotenv from 'dotenv';
import { DotEnvCaster } from './DotEnvCaster';

// dotenv.config();
dotenv.config();
//Create an instance
const dotenvCaster = new DotEnvCaster();

describe('Test of DotEnvCaster Class', () => {
  //* castString *//
  test.concurrent('castString: string | undefined -> string', () => {
    const dotenvSample: string | undefined = process.env.STRING_SAMPLE;
    const stringSample = dotenvCaster.castString(dotenvSample);
    expectTypeOf(stringSample).toEqualTypeOf<string>();
  });
  test.concurrent('castString: Expected Output', () => {
    const dotenvSample: string | undefined = process.env.STRING_SAMPLE;
    const stringSample = dotenvCaster.castString(dotenvSample);
    expect(stringSample).toEqual('Hello');
  });
  test.concurrent('castString: Expected Output (unexpected output pattern)', () => {
    const dotenvSample: string | undefined = process.env.STRING_SAMPLE;
    const stringSample = dotenvCaster.castString(dotenvSample);
    expect(stringSample).not.toEqual('hello');
  });
  test.concurrent('castString: undefined variable', () => {
    const dotenvSample: string | undefined = process.env.STRING_DOES_NOT_EXIST;
    expect(() => dotenvCaster.castString(dotenvSample)).toThrowError(
      'This type of constant is undefined. You have to set the string value in this constant.'
    );
  });
  //* castNumber *//
  test.concurrent('castNumber: string | undefined -> number (pattern 1)', () => {
    const dotenvSample: string | undefined = process.env.NUMBER_SAMPLE;
    const numberSample = dotenvCaster.castNumber(dotenvSample);
    expectTypeOf(numberSample).toEqualTypeOf<number>();
  });
  test.concurrent('castNumber: string | undefined -> number (pattern 2)', () => {
    const dotenvSample: string | undefined = process.env.NUMBER_SAMPLE;
    const numberSample = dotenvCaster.castNumber(dotenvSample);
    expect(numberSample).not.toEqual('0');
  });
  test.concurrent('castNumber: Expected Output', () => {
    const dotenvSample: string | undefined = process.env.NUMBER_SAMPLE;
    const numberSample: number = dotenvCaster.castNumber(dotenvSample);
    expect(numberSample).toEqual(0);
  });
  test.concurrent('castNumber: Expected Output (unexpected output pattern)', () => {
    const dotenvSample: string | undefined = process.env.NUMBER_SAMPLE;
    const numberSample: number = dotenvCaster.castNumber(dotenvSample);
    expect(numberSample).not.toEqual(1);
  });
  test.concurrent('castNumber: undefined variable', () => {
    const dotenvSample: string | undefined = process.env.NUMBER_DOES_NOT_EXIST;
    expect(() => dotenvCaster.castNumber(dotenvSample)).toThrowError(
      'This type of constant is undefined. You have to set the string value in this constant.'
    );
  });
  // input string type
  test.concurrent('castNumber: string | undefined -> Error (input string type)', () => {
    const stringSample: string = 'Hello, World!';
    expect(() => dotenvCaster.castNumber(stringSample)).toThrowError('This constant can not convert to number.');
  });
  // input string type that can be converted to boolean type
  test.concurrent(
    'castNumber: string | undefined -> Error (input string type that can be converted to boolean type)',
    () => {
      const booleanSample: string = 'true';
      expect(() => dotenvCaster.castNumber(booleanSample)).toThrowError('This constant can not convert to number.');
    }
  );
  // input string type that can be converted to null
  test.concurrent('castNumber: string | undefined -> Error (input string type that can be converted to null)', () => {
    const nullSample: string = 'null';
    expect(() => dotenvCaster.castNumber(nullSample)).toThrowError('This constant can not convert to number.');
  });
  //* castBigInt *//
  test.concurrent('castBigInt: string | undefined -> bigint (pattern 1)', () => {
    const dotenvSample: string | undefined = process.env.BIGINT_SAMPLE;
    const bigIntSample = dotenvCaster.castBigInt(dotenvSample);
    expectTypeOf(bigIntSample).toEqualTypeOf<bigint>();
  });
  test.concurrent('castBigInt: string | undefined -> bigint (pattern 2)', () => {
    const dotenvSample: string | undefined = process.env.BIGINT_SAMPLE;
    const bigIntSample = dotenvCaster.castBigInt(dotenvSample);
    expect(bigIntSample).not.toEqual('1234567890123456789012345678901234567890');
  });
  test.concurrent('castBigInt: Expected Output', () => {
    const dotenvSample: string | undefined = process.env.BIGINT_SAMPLE;
    const bigIntSample: bigint = dotenvCaster.castBigInt(dotenvSample);
    expect(bigIntSample).toEqual(1234567890123456789012345678901234567890n);
  });
  test.concurrent('castBigInt: Expected Output (unexpected output pattern 1)', () => {
    const dotenvSample: string | undefined = process.env.BIGINT_SAMPLE;
    const bigIntSample: bigint = dotenvCaster.castBigInt(dotenvSample);
    expect(bigIntSample).not.toEqual(1n);
  });
  test.concurrent('castBigInt: Expected Output (unexpected output pattern 2)', () => {
    const dotenvSample: string | undefined = process.env.BIGINT_SAMPLE;
    const bigIntSample: bigint = dotenvCaster.castBigInt(dotenvSample);
    expect(bigIntSample).not.toEqual(1234567890123456789012345678901234567890);
  });
  test.concurrent('castBigInt: undefined variable', () => {
    const dotenvSample: string | undefined = process.env.BIGINT_DOES_NOT_EXIST;
    expect(() => dotenvCaster.castBigInt(dotenvSample)).toThrowError(
      'This type of constant is undefined. You have to set the string value in this constant.'
    );
  });
  // input string type
  test.concurrent('castBigInt: string | undefined -> Error (input string type)', () => {
    const stringSample: string = 'Hello, World!';
    expect(() => dotenvCaster.castBigInt(stringSample)).toThrowError('This constant can not convert to bigint.');
  });
  // input string type that can be converted to boolean type
  test.concurrent(
    'castBigInt: string | undefined -> Error (input string type that can be converted to boolean type)',
    () => {
      const booleanSample: string = 'true';
      expect(() => dotenvCaster.castBigInt(booleanSample)).toThrowError('This constant can not convert to bigint.');
    }
  );
  // input string type that can be converted to null
  test.concurrent('castBigInt: string | undefined -> Error (input string type that can be converted to null)', () => {
    const nullSample: string = 'null';
    expect(() => dotenvCaster.castBigInt(nullSample)).toThrowError('This constant can not convert to bigint.');
  });
  //* castSymbol *//
  test.concurrent('castSymbol: string | undefined -> symbol (pattern 1)', () => {
    const dotenvSample: string | undefined = process.env.SYMBOL_SAMPLE;
    const bigIntSample = dotenvCaster.castSymbol(dotenvSample);
    expectTypeOf(bigIntSample).toEqualTypeOf<symbol>();
  });
  test.concurrent('castSymbol: string | undefined -> symbol (pattern 2)', () => {
    const dotenvSample: string | undefined = process.env.SYMBOL_SAMPLE;
    const symbolSample1 = dotenvCaster.castSymbol(dotenvSample);
    const symbolSample2 = dotenvCaster.castSymbol(dotenvSample);
    expect(symbolSample1 === symbolSample1).toEqual(true);
    expect(symbolSample1 === symbolSample2).toEqual(false);
  });
  test.concurrent('castSymbol: undefined variable', () => {
    const dotenvSample: string | undefined = process.env.SYMBOL_DOES_NOT_EXIST;
    expect(() => dotenvCaster.castSymbol(dotenvSample)).toThrowError(
      'This type of constant is undefined. You have to set the string value in this constant.'
    );
  });
  //* castBoolean *//
  test.concurrent('castBoolean: string | undefined -> bigint (pattern 1)', () => {
    const dotenvSample: string | undefined = process.env.BOOLEAN_SAMPLE;
    const booleanSample = dotenvCaster.castBoolean(dotenvSample);
    expectTypeOf(booleanSample).toEqualTypeOf<boolean>();
  });
  test.concurrent('castBoolean: string | undefined -> bigint (pattern 2)', () => {
    const dotenvSample: string | undefined = process.env.BOOLEAN_SAMPLE;
    const booleanSample = dotenvCaster.castBoolean(dotenvSample);
    expect(booleanSample).not.toEqual('true');
  });
  test.concurrent('castBoolean: Expected Output', () => {
    const dotenvSample: string | undefined = process.env.BOOLEAN_SAMPLE;
    const booleanSample: boolean = dotenvCaster.castBoolean(dotenvSample);
    expect(booleanSample).toEqual(true);
  });
  test.concurrent('castBoolean: Expected Output (unexpected output pattern)', () => {
    const dotenvSample: string | undefined = process.env.BOOLEAN_SAMPLE;
    const booleanSample: boolean = dotenvCaster.castBoolean(dotenvSample);
    expect(booleanSample).not.toEqual(false);
  });
  test.concurrent('castBoolean: undefined variable', () => {
    const dotenvSample: string | undefined = process.env.BOOLEAN_DOES_NOT_EXIST;
    expect(() => dotenvCaster.castBoolean(dotenvSample)).toThrowError(
      'This type of constant is undefined. You have to set the string value in this constant.'
    );
  });
  // input string type
  test.concurrent('castBoolean: string | undefined -> Error (input string type)', () => {
    const stringSample: string = 'Hello, World!';
    expect(() => dotenvCaster.castBoolean(stringSample)).toThrowError('This constant can not convert to boolean.');
  });
  // input string type that can be converted to number type
  test.concurrent(
    'castBoolean: string | undefined -> Error (input string type that can be converted to number type)',
    () => {
      const numberSample: string = '0';
      expect(() => dotenvCaster.castBoolean(numberSample)).toThrowError('This constant can not convert to boolean.');
    }
  );
  // input string type that can be converted to null
  test.concurrent('castBoolean: string | undefined -> Error (input string type that can be converted to null)', () => {
    const nullSample: string = 'null';
    expect(() => dotenvCaster.castBoolean(nullSample)).toThrowError('This constant can not convert to boolean.');
  });
  //* castNull *//
  test.concurrent('castNull: string | undefined -> bigint (pattern 1)', () => {
    const dotenvSample: string | undefined = process.env.NULL_SAMPLE;
    const nullSample = dotenvCaster.castNull(dotenvSample);
    expectTypeOf(nullSample).toEqualTypeOf<null>();
  });
  test.concurrent('castNull: string | undefined -> bigint (pattern 2)', () => {
    const dotenvSample: string | undefined = process.env.NULL_SAMPLE;
    const nullSample = dotenvCaster.castNull(dotenvSample);
    expect(nullSample).not.toEqual('null');
  });
  test.concurrent('castNull: Expected Output', () => {
    const dotenvSample: string | undefined = process.env.NULL_SAMPLE;
    const nullSample: null = dotenvCaster.castNull(dotenvSample);
    expect(nullSample).toEqual(null);
  });
  test.concurrent('castNull: undefined variable', () => {
    const dotenvSample: string | undefined = process.env.BOOLEAN_DOES_NOT_EXIST;
    expect(() => dotenvCaster.castNull(dotenvSample)).toThrowError(
      'This type of constant is undefined. You have to set the string value in this constant.'
    );
  });
  // input string type
  test.concurrent('castNull: string | undefined -> Error (input string type)', () => {
    const stringSample: string = 'Hello, World!';
    expect(() => dotenvCaster.castNull(stringSample)).toThrowError('This constant can not convert to null.');
  });
  // input string type that can be converted to number type
  test.concurrent(
    'castNull: string | undefined -> Error (input string type that can be converted to number type)',
    () => {
      const numberSample: string = '0';
      expect(() => dotenvCaster.castNull(numberSample)).toThrowError('This constant can not convert to null.');
    }
  );
  // input string type that can be converted to boolean type
  test.concurrent(
    'castNull: string | undefined -> Error (input string type that can be converted to boolean type)',
    () => {
      const booleanSample: string = 'true';
      expect(() => dotenvCaster.castNull(booleanSample)).toThrowError('This constant can not convert to null.');
    }
  );
});
