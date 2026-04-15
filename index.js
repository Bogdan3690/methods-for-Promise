const promise = new Promise((resolve, reject) => {
    resolve(10)
 })

 promise.then((result) => {console.log(result);
 })



const promiseNew = Promise.resolve(20)

promiseNew.then((resultNew) => {console.log(resultNew);
 })

 const promiseReject = Promise.reject('Error 404')

 promiseReject.catch((error) => {console.log(error)
 })