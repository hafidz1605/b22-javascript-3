const lari = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Bersedia');
    }, 1000)
});
const lari2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Siap');
    }, 2000)
});
const lari3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Mulai...!!!');
    }, 3000)
});

lari.then((data) => {
    console.log(data)
  })
lari2.then((data) => {
    console.log(data)
  })
lari3.then((data) => {
    console.log(data)
  })

