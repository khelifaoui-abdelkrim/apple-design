//js commun
let ctrls = document.querySelectorAll('.watch-control , .controls a')
ctrls.forEach(ctrl=>{
  ctrl.addEventListener('click',ele=>{
    ele.preventDefault()
  })
})
//end of js commun

//box controls
let cube = document.querySelector('.box')
let y = 0;
let x = 0;
let z = 0;
let bool = true;
let interval;

document.querySelector('.top-x-control').addEventListener('click',()=>{
  cube.style.transform = `rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})
document.querySelector('.bottom-x-control').addEventListener('click',()=>{
  cube.style.transform = `rotateX(${x -= 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})
document.querySelector('.left-y-control').addEventListener('click',()=>{
  cube.style.transform = `rotateX(${x}deg) rotateY(${y-=20}deg) rotateZ(${z}deg)`
})
document.querySelector('.right-y-control').addEventListener('click',()=>{
  cube.style.transform = `rotateX(${x}deg) rotateY(${y+=20}deg) rotateZ(${z}deg)`
})
document.querySelector('.top-z-control').addEventListener('click',()=>{
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z-=20}deg)`
})
document.querySelector('.bottom-z-control').addEventListener('click',()=>{
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z+=20}deg)`
})

let playPause = ()=>{
  if(bool){
    interval = setInterval(()=>{
      cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`
    },100)
  }else{
    clearInterval(interval);
  }
}
document.querySelector('.controls').addEventListener('mouseover',()=>{
  bool = false
  playPause();
})
document.querySelector('.controls').addEventListener('mouseout',()=>{
  bool = true
  playPause();
})
playPause();
//reset
document.querySelector('.reset-btn').addEventListener('click',()=>{
  cube.style.transform = `rotateX(${0}deg) rotateY(${0}deg) rotateZ(${0}deg)`
})
//end of reset

//end of box controls
//slide show
let slideshowDivs = ()=>{
  
  for(let i=1;i<5;i++){
    let div = document.createElement('div');
    div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;

    i === 1 && div.classList.add('change')

    document.querySelector('.slideshow').appendChild(div);
  }
}
slideshowDivs();

let divs = document.querySelectorAll('.slideshow div')
let a = 0;

const slideshow = ()=>{
  setInterval(()=>{
    a++;
    const changeDiv = document.querySelector('.slideshow .change')
    
    changeDiv.classList.remove('change')
    if(a < divs.length){
      changeDiv.nextElementSibling.classList.add('change')
    }else{
      divs[0].classList.add('change')
      a = 0;
    }
      
  }, 10000)
}
 slideshow();
//end of slide show

//macbook
let section3ct = document.querySelector('.section3-content')
let section3 = document.querySelector('.section3')

window.addEventListener('scroll',()=>{
  if(window.pageYOffset + window.innerHeight >= section3.offsetTop + section3ct.offsetHeight/2){
    section3ct.classList.add('change');
  }
})
//end of macbook

//wtches
let bands = document.querySelector('.watches-band')
let cases = document.querySelector('.watches-case')
let btntop = document.querySelector('.watch-top-control')
let btndown = document.querySelector('.watch-down-control')
let btnleft = document.querySelector('.watch-left-control')
let btnright = document.querySelector('.watch-right-control')

let topBtm = 0;
let leftright = 0;

  /*btntop.addEventListener('click',()=>{   !!!ma methode a revoir!!!
    if(topBtm <= `${176}rem` || topBtm >= `-${176}rem`){
      cases.style.marginTop = `${topBtm += 44}rem`;
    }
    
  })
  btndown.addEventListener('click',()=>{
    if(topBtm <= `${176}rem` || topBtm >= `-${176}rem`){
      cases.style.marginTop = `${topBtm-= 44}rem`;
    }
    
  })*/
let hidecontent = ()=>{
  if(topBtm === 176){
    btntop.classList.add('hide')
  }else{
    btntop.classList.remove('hide')
  }
  if(topBtm === -176){
    btndown.classList.add('hide')
  }else{
    btndown.classList.remove('hide')
  }    
  if(leftright === -176){
    btnleft.classList.add('hide')
  }else{
    btnleft.classList.remove('hide')
  }
  if(leftright === 176){
    btnright.classList.add('hide')
  }else{
    btnright.classList.remove('hide')
  }  
}

btntop.addEventListener('click',()=>{ 
    cases.style.marginTop = `${topBtm += 44}rem`
    hidecontent();
})
btndown.addEventListener('click',()=>{
    cases.style.marginTop = `${topBtm-= 44}rem`
    hidecontent();
})
btnleft.addEventListener('click',()=>{ 
  bands.style.marginRight = `${leftright -= 44}rem`
  hidecontent();
  console.log(leftright)
})
btnright.addEventListener('click',()=>{
  bands.style.marginRight = `${leftright += 44}rem`
  hidecontent();
  btnleft
  
})    



//end of watches