import { DateTime } from "../node_modules/luxon/build/es6/luxon.js";

const updateDateTime = () => {
  const now = DateTime.now();
  document.getElementById('current-time').innerHTML = now;
}

setInterval(updateDateTime, 10000);

export { updateDateTime };
