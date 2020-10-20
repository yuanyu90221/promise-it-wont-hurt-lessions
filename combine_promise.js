'use strict';
const all = (promise1, promise2) => {
  return new Promise((resolve, reject) => {
    let values = [];
    promise1.then(data => {
      values.unshift(data);
      if (values.length === 2) {
        resolve(values)
      }
    }, err => {
      reject(err);
    })
    promise2.then(data => {
      values.push(data);
      if (values.length === 2) {
        resolve(values)
      }
    }, err => reject(err));
  });
};
all(getPromise1(), getPromise2()).then(console.log);