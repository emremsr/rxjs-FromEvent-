import './style.css';

import { of, map, Observable, fromEvent } from 'rxjs';

const saveButton = document.querySelector('#btn');

const tikla = fromEvent<MouseEvent>(saveButton, 'click').subscribe((event) =>
  console.log(event.type, event.x, event.y)
);

setTimeout(() => {
  console.log('unsubscribe');
  tikla.unsubscribe();
}, 5000);
