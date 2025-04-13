import { describe, expect, expectTypeOf, test } from 'vitest';
import dotenv from 'dotenv';
import { DotEnvCaster } from './index';

// dotenv.config();
dotenv.config();

describe('Test To See If DotEnvCaster Is Exported.', () => {
  test('DotEnvCaster is exported.', () => {
    const dotenvCaster = new DotEnvCaster();
    expect(dotenvCaster).toBeDefined();
  });
});
