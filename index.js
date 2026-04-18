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






 const horses = [
  "Secretariat",
  "Eclipse",
  "West Australian",
  "Flying Fox",
  "Seabiscuit",
];

const btn = document.querySelector('button')

btn.addEventListener("click", () => {
console.log("🤖 Заїзд розпочався, ставки не приймаються!")

const horsesPromises = horses.map(horse => run(horse))

Promise.all(horsesPromises).then((result) => {
    console.log(result);
    
    console.log("📝 Заїзд закінчено, приймаються ставки.")

})

Promise.race(horsesPromises).then(({horse, time}) => {
    console.log(`🎉 Переможець ${horse}, фінишував за ${time}
часу`)
});
})




function run(horse) {
  return new Promise((resolve) => {
    const time = getRandomTime(2000, 3500)

    setTimeout(() => {
        resolve({horse, time})

    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}