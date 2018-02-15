const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is resolved data');        
        reject('error msg');
    }, 1500)    
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});