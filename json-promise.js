'use strict';
const q_io = require('q-io/http');
q_io.read('http://localhost:1337')
.then(response => JSON.parse(response))
.then(console.log)
.done()