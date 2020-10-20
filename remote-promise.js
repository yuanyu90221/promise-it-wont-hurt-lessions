'use strict';
const http = require('q-io/http');
// const fetchResult = (url) => {
//   return new Promise((resolve, reject) => {
//     http.get(url, (res) => {
//      let {statusCode} = res;
//      if (statusCode!==200) {
//        reject(new Error('request error'))
//      }
//      let rawData = '';
//      res.on('data', (chunk)=> { rawData += chunk})
//      res.on('end', () => {
//        try {
//         const parseData = JSON.parse(rawData);
//         resolve(parseData);
//        } catch (e) {
//          resolve(rawData);
//        }
//      }).on('error', e => reject(e));
//     })
//   });
// }
http.read('http://localhost:7000').then(id => {
  return http.read(`http://localhost:7001/${id}`)
}).then(json => console.log(JSON.parse(json)))
.then(null, console.error)
.done();