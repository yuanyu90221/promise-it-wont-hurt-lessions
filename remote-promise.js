'use strict';
const { stat } = require('fs');
const http = require('http');
const fetchResult = (url) => {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
     let {statusCode} = res;
     if (statusCode!==200) {
       reject(new Error('request error'))
     }
     let rawData = '';
     res.on('data', (chunk)=> { rawData += chunk})
     res.on('end', () => {
       try {
        const parseData = JSON.parse(rawData);
        resolve(parseData);
       } catch (e) {
         resolve(rawData);
       }
     }).on('error', e => reject(e));
    })
  });
}
fetchResult('http://localhost:7000').then(id => {
  return fetchResult(`http://localhost:7001/${id}`)
}).then(console.log);