const score = document.querySelector(".numero5 h2")
const score6 = document.querySelector(".numero6 h2")
const score10 = document.querySelector(".numero10 h2")
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

let counter = 0;
let counter6 = 0;
let counter10 = 0;

// FUNÇÃO PARA LIDAR COM SCROLL NA PAGINA

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
  smoothScrollTo(0, distanceFromTheTop, 600);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}


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
