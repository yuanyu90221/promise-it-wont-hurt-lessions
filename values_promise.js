'use strict';
const attachTitle = data => 'DR. ' + data; 
const promise = Promise.resolve('MANHATTAN');
promise.then(attachTitle).then(console.log);
