'use strict';
const parsePromised = (data) => {
 return new Promise((resolve, reject) => {
     try {
       resolve(JSON.parse(data)); 
     } catch (err) {
       reject(err);
     }
  })
}
const data = process.argv[2];
parsePromised(data).then(null,err=>console.log(err.message));
