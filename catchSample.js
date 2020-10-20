const alwaysThrows = async () =>{ throw new Error("OH NOES"); }
function iterate(num) {
  console.log(num);
  return Number(num)+1;
}
Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate).then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(err=>console.log(err.message))