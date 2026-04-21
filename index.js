// const promise = new Promise((resolve, reject) => {
//     resolve(10)
//  })

//  promise.then((result) => {console.log(result);
//  })



// const promiseNew = Promise.resolve(20)

// promiseNew.then((resultNew) => {console.log(resultNew);
//  })

//  const promiseReject = Promise.reject('Error 404')

//  promiseReject.catch((error) => {console.log(error)
//  })






 const horses = [
  "Secretariat",
  "Eclipse",
  "West Australian",
  "Flying Fox",
  "Seabiscuit",
];

const btn = document.querySelector('.js-start-race')
const refs = {
winnerField: document.querySelector('.js-winner'),
progressField: document.querySelector('.js-progress'),
tableBody: document.querySelector('.js-results-table > tbody'),
};


btn.addEventListener("click", () => {
btn.disabled = true;

refs.progressField.textContent = '🤖 Заїзд розпочався, ставки не приймаються!';
console.log("🤖 Заїзд розпочався, ставки не приймаються!")

  refs.winnerField.textContent = '';
  refs.tableBody.innerHTML = '';

const horsesPromises = horses.map(horse => run(horse))

Promise.race(horsesPromises).then(({horse, time}) => {
    refs.winnerField.textContent =
      `🎉 Переможець ${horse}, фінішував за ${time} ms`;
    console.log(`🎉 Переможець ${horse}, фінишував за ${time}
часу`)
});

Promise.all(horsesPromises).then((results) => {
    console.table(results);
    
    refs.progressField.textContent =
      '📝 Заїзд закінчено, приймаються ставки.';
    console.log("📝 Заїзд закінчено, приймаються ставки.")

        const sorted = [...results].sort((a, b) => a.time - b.time);

sorted.forEach(({ horse, time }, index) => {
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${index + 1}</td>
    <td>${horse}</td>
    <td>${time}</td>
  `;

  refs.tableBody.appendChild(tr);
    });
    
    btn.disabled = false;
})
  .catch(error => {
    console.error(error);
    refs.progressField.textContent = '❌ Помилка';
    refs.btn.disabled = false;
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


