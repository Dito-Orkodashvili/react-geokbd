const SYMBOLS = 'abgdevzTiklmnopJrstufqRySCcZwWxjh';

export const translate = str => {
  const arrValue = str.split('');

  return arrValue.map(ch => {
    let symbolIndex = SYMBOLS.indexOf(ch);
    if (symbolIndex >= 0) {
      return String.fromCharCode(symbolIndex + 4304);
    } else {
      return ch;
    }
  }).join('');
};
