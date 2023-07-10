import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';
import { getNumberSuffix } from './GetNumberSuffix.js';

const updateDateTime = () => {
  const now = DateTime.now().setLocale('en');
  const month = now.toFormat('LLLL');
  const day = now.toFormat('d');
  const suffix = getNumberSuffix(day);
  const year = now.toFormat('y');
  const time = now.toLocaleString(DateTime.TIME_WITH_SECONDS).toLowerCase();
  document.getElementById('current-time').innerHTML = `${month} ${day}${suffix} ${year}, ${time}`;
};

setInterval(updateDateTime, 1000);

export { updateDateTime };
