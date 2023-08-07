import { join } from './index';

const stub = [
  {
    input: ['1', '2', '3', '4'],
    output: '1, 2, 3 and 4',
  },
  {
    input: ['1', '2'],
    output: '1 and 2',
  },
  {
    input: ['1'],
    output: '1',
  },
  {
    input: [],
    output: '',
  },
];

describe('Basic functionality', () => {
  for (let i = 0; i < stub.length; i++) {
    it('Should run test and have expected output ' + i, () => {
      expect(join(stub[i].input)).toEqual(stub[i].output);
    });
  }
});

describe('Customize separator', () => {
  it('Should use customized separator', () => {
    expect(join(['1', '2', '3', '4'], ', ', '&')).toEqual('1, 2, 3 & 4');
  });
});
