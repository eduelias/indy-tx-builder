import txs from '../tx-types/index';

const types: { [key: string]: string } = {
  ...txs.Read,
  ...txs.Write,
};

export function getTypeByNumber(number: number | string): string {
  const toReturn: string =
    Object.keys(types).find(prop => types[prop] === number.toString()) || '';

  if (!toReturn || toReturn === '') {
    throw new Error('Transaction description not found.');
  }

  return toReturn;
}
