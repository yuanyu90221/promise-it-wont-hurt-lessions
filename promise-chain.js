'use strict';
//first().then(second).then(console.log);
const firstPromise = first();
const secondPromise = firstPromise.then(second).then(console.log);

