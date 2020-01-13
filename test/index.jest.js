const { calcjs } = require('../calcjs.js');
describe('calcjs test', () => {
  test('1', () => {
    expect(calcjs('1').result).toBe(1);
  });
  test('1+\n2', () => {
    expect(calcjs('1+\n2').result).toBe(3);
  });
  test('(1) + 2', () => {
    expect(calcjs('(1) + 2').result).toBe(3);
  });
  test('(1 + 2) * 3', () => {
    expect(calcjs('(1 + 2) * 3').result).toBe(9);
  });
  test('2*(5-3)', () => {
    expect(calcjs('2*(5-3)').result).toBe(4);
  });
  test('-2*(5-3)', () => {
    expect(calcjs('-2*(5-3)').result).toBe(-4);
  });
  test('-2*(5--3)', () => {
    expect(calcjs('-2*(5--3)').result).toBe(-16);
  });
  test('2*5-3)', () => {
    expect(calcjs('2*5-3').result).toBe(7);
  });
  test('-(13-7)*(17+9)', () => {
    expect(calcjs('-(13-7)*(17+9)').result).toBe(-156);
  });
  test('-(15/5-7)*(17-7)', () => {
    expect(calcjs('-(15/5-7)*(17-7)').result).toBe(40);
  });

  test('5.154 + -0.154 + 20 - (-5*7)', () => {
    expect(calcjs('5.154 + -0.154 + 20 - (-5*7)').result).toBe(60);
  });
  test('(((5+5)))', () => {
    expect(calcjs('(((5+5)))').result).toBe(10);
  });
  test('5/0', () => {
    expect(()=>calcjs('5/0').result).toThrowError('被除数不允许为0');
  });

  test('a + b', () => {
    expect(()=>calcjs('a + b').result).toThrowError('语法错误');
  });

  test('5 + 6..5', () => {
    expect(()=>calcjs('5 + 6..5').result).toThrowError('语法错误');
  });

  test('5 + 6.a', () => {
    expect(()=>calcjs('5 + 6.a').result).toThrowError('语法错误');
  });

  test('5 ++ 6', () => {
    expect(()=>calcjs('5 ++ 6').result).toThrowError('语法错误');
  });

  test('()', () => {
    expect(()=>calcjs('()').result).toThrowError('语法错误');
  });

  test('(((5)))5', () => {
    expect(()=>calcjs('(((5)))5').result).toThrowError('语法错误');
  });
  test('5 5 + 6', () => {
    expect(()=>calcjs('5 5 + 6').result).toThrowError('语法错误');
  });
  test('+6 - 5', () => {
    expect(()=>calcjs('+6 - 5').result).toThrowError('语法错误');
  });
  test('(6 - 5))', () => {
    expect(()=>calcjs('(6 - 5))').result).toThrowError('语法错误');
  });
  test('6 - 5))', () => {
    expect(()=>calcjs('6 - 5))').result).toThrowError('语法错误');
  });
  test('(((6 - 5))', () => {
    expect(()=>calcjs('(((6 - 5))').result).toThrowError('语法错误');
  });
});
