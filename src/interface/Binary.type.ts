export type Binary<N extends number = number> = string & {
  readonly BinaryStringLength: unique symbol;
  length: N;
};

class AssertionError extends Error {
  override name = 'AssertionError';
}

function assertIsBinaryString<L extends number>(
  str: string,
  length?: L,
): asserts str is Binary<L> {
  if (typeof length === 'number' && str.length !== length) {
    throw new AssertionError('Binary string has invalid length');
  }

  for (const unit of str) {
    if (unit !== '0' && unit !== '1') {
      throw new AssertionError('Invalid character in binary string');
    }
  }
}


// Use:

function asDecimal(bStr: Binary): number {
  return parseInt(bStr, 2);
}

function byteAsChar(byte: Binary<8>): string {
  return new TextDecoder().decode(new Uint8Array([asDecimal(byte)]));
}

let str = '00100100';
// console.log(asDecimal(str)); // string not assignable to Binary
/*                       ^^^
                      Error 2345 */

assertIsBinaryString(str);
console.log(asDecimal(str)); // ok now => 36

// console.log(byteAsChar(str)); // Binary<number> not assignable to Binary<8> because number not assignable to 8
/*                        ^^^
                      Error 2345 */

assertIsBinaryString(str, 8);
console.log(byteAsChar(str)); // ok now => "$"