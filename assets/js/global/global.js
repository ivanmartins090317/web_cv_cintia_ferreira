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

// botão hamburger menu mobile
const buttonMenu = document.querySelector(".mobile")
const containerMobile = document.querySelector('[data-set="menu_mobile"]')
const barraOne = document.querySelector(".um")
const barraTwo = document.querySelector(".dois")
console.log(barraOne);
let show = true;
buttonMenu.addEventListener('click', () => {
  
  containerMobile.classList.toggle("none")
  buttonMenu.classList.toggle("ativo")
})

// contador da section apresentação
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



document.addEventListener('DOMContentLoaded', () => {
    const competencias = document.querySelector('.nivel-competencias');

     competencias.addEventListener('animationiteration', () => {
        competencias.classList.remove('slide');
        competencias.style.transform = 'translateX(0)';
        void competencias.offsetWidth; 
        competencias.classList.add('slide');
    });
});


// animações com observe
const tempoExperiencia = document.querySelector(".tempo-experiecia")
const competencias = document.querySelector(".nivel-competencias")
const circle = document.querySelectorAll('circle')


const handleAnimation = entry =>{
  entry.forEach(element =>{
    if(element.isIntersecting){
      counterNumebers(0, 5, score)
      counterNumebers(0, 6, score6)
      counterNumebers(0, 10, score10)
    }
  })
}

const handleRotate = entry =>{ 
 entry.forEach(element =>{
  if(element.isIntersecting){
        element.target.classList.add('visible')
        return
      }
      element.target.classList.remove('visible')
    }
  )
  }
  
  
  const isFuncObserver = new IntersectionObserver(handleAnimation)
  const isRotateObserver = new IntersectionObserver(handleRotate)
  
  isFuncObserver.observe(tempoExperiencia)
  
  circle.forEach(item =>{
    isRotateObserver.observe(item)
  })
