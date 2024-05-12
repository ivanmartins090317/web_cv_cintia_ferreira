const score = document.querySelector(".numero5 h2")
const score6 = document.querySelector(".numero6 h2")
const score10 = document.querySelector(".numero10 h2")
let counter = 0;
let counter6 = 0;
let counter10 = 0;


(function (){

  // Bloqueando arrasta imagens do site para baixar

  function desativarDragDrop () {
    document.addEventListener('dragstart', (evento) => evento.preventDefault(), false)
    document.addEventListener('drop', (evento) => evento.preventDefault(), false)
  }

  desativarDragDrop()

}())


const apresentacao = document.querySelector('.apresentacao')

const counterNumebers = (counter, limit, element) =>{
  const timer = setInterval(() =>{
    if(counter === limit){
      clearInterval(timer)
    }
    element.textContent = `${counter}+ `
    counter++
  }, 300)
}

counterNumebers(0, 5, score)
counterNumebers(0, 6, score6)
counterNumebers(0, 10, score10)

// const isCounter6 = setInterval(() =>{
//   console.log('rodando...')
//   if(counter6 === 6){
//     clearInterval(isCounter6)
//   }
//   score6.textContent = `${counter6}+`
//   counter6++
// }, 300)

// const timer10 = setInterval(() =>{
//   console.log('rodando...')
//   if(counter10 === 10){
//     clearInterval(timer10)
//   }
//   score10.textContent = `${counter10}+`
//   counter10++
// }, 300)