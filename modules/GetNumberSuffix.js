const getNumberSuffix = (num) => {
  const th = 'th';
  const rd = 'rd';
  const nd = 'nd';
  const st = 'st';

  if (num === 11 || num === 12 || num === 13) return th;

  const lastDigit = num.toString().slice(-1);

  switch (lastDigit) {
    case '1': return st;
    case '2': return nd;
    case '3': return rd;
    default: return th;
  }
};

export default getNumberSuffix;