/* eslint-disable unicorn/no-null */
import { describe, expect, it } from '@jest/globals';
import { mapGetOrThrow } from './map';

describe('map', () => {
  describe('mapGetOrThrow()', () => {
    const MAP = new Map<string, string | undefined>([
      ['key1', 'value1'],
      ['key2', 'value2'],
      ['key3', undefined],
    ]);

    describe('valid', () => {
      interface Example {
        readonly input: string;
        readonly expected: string | undefined;
      }

      const EXAMPLES: readonly Example[] = [
        {
          input: 'key1',
          expected: 'value1',
        },
        {
          input: 'key2',
          expected: 'value2',
        },
        {
          input: 'key3',
          expected: undefined,
        },
      ];

      for (const example of EXAMPLES) {
        it(JSON.stringify(example), () => {
          const actual = mapGetOrThrow(MAP, example.input);
          expect(actual).toEqual(example.expected);
        });
      }
    });

    describe('throws', () => {
      interface Example {
        readonly input: unknown;
      }

      const EXAMPLES: readonly Example[] = [
        {
          input: undefined,
        },
        {
          input: null,
        },
        {
          input: '',
        },
        {
          input: 'non-existing-key',
        },
      ];

      for (const example of EXAMPLES) {
        it(JSON.stringify(example), () => {
          expect(() => mapGetOrThrow(MAP, example.input)).toThrowError();
        });
      }
    });
  });
});
