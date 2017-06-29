let table = document.getElementsByClassName('key')
let counter = 0

  for (let i = 0; i < table.length; i++) {
    table[i].addEventListener('click', function () {
      counter ++
      console.log(`Hi I am the counter: ${counter}`)
      counter % 2 === 1 ? table[i].innerHTML = 'O' : table[i].innerHTML = 'X'
    })
  }