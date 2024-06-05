# dotenv-caster

dotenv-caster is a tiny package that converts `string | undefined` to certain `primitive types`.

## How to Use

This is an example of use if the following is written in `.env`.

```.env
STRING_SAMPLE=Hello
NUMBER_SAMPLE=0
BIGINT_SAMPLE=123456789
SYMBOL_SAMPLE=SYMBOL
BOOLEAN_SAMPLE=true
NULL_SAMPLE=null

```

The following is an example of use. `dotenv-caster` is intended for use in projects that use `dotenv`.

```typescript
import { DotEnvCaster } from 'dotenv-caster';
import dotenv from 'dotenv';

dotenv.config();

//Create an instance
const dotenvCaster = new DotEnvCaster();

//string | undefined -> string
const stringSample: string = dotenvCaster.castString(process.env.STRING_SAMPLE);
//string | undefined -> number
const numberSample: number = dotenvCaster.castNumber(process.env.NUMBER_SAMPLE);
//string | undefined -> bigint
const bigIntSample: bigint = dotenvCaster.castBigInt(process.env.BIGINT_SAMPLE);
//string | undefined -> symbol
const symbolSample: symbol = dotenvCaster.castSymbol(process.env.SYMBOL_SAMPLE);
//string | undefined -> boolean
const booleanSample: boolean = dotenvCaster.castBoolean(process.env.BOOLEAN_SAMPLE);
//string | undefined -> null
const nullSample: null = dotenvCaster.castNull(process.env.NULL_SAMPLE);
```

### examples showing the use

[dotenv-caster-sample](https://github.com/Myxogastria0808/dotenv-caster-sample)

## Detail

### Create an instance

When using `dotenv-caster`, first create an instance as follows.

```typescript
//Create an instance
const dotenvCaster = new DotEnvCaster();
```

### string | undefined → string

```typescript
//string | undefined -> string
const stringSample: string = dotenvCaster.castString(process.env.STRING_SAMPLE);
```

### string | undefined → number

```typescript
//string | undefined -> number
const numberSample: number = dotenvCaster.castNumber(process.env.NUMBER_SAMPLE);
```

### string | undefined → bigint

```typescript
//string | undefined -> bigint
const bigIntSample: bigint = dotenvCaster.castBigInt(process.env.BIGINT_SAMPLE);
```

### string | undefined → symbol

```typescript
//string | undefined -> symbol
const symbolSample: symbol = dotenvCaster.castSymbol(process.env.SYMBOL_SAMPLE);
```

### string | undefined → boolean

```typescript
//string | undefined -> boolean
const booleanSample: boolean = dotenvCaster.castBoolean(process.env.BOOLEAN_SAMPLE);
```

### string | undefined → null

```typescript
//string | undefined -> null
const nullSample: null = dotenvCaster.castNull(process.env.NULL_SAMPLE);
```
