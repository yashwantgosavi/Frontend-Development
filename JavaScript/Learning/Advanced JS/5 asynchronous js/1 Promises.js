var promise = new Promise((resolve, reject) => {
    // resolve("yay promise fulfilled");
    // reject('something went wrong');
    setTimeout(() => {
        resolve({ message: 'success' });
    }, 3000);
});

promise.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});