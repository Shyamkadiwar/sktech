burger=document.querySelector('.burger')
ul=document.querySelector('ul')
lettalk=document.querySelector('.lettalk')
nav=document.querySelector('nav')

burger.addEventListener('click',()=>{
    ul.classList.toggle('vclass')
    lettalk.classList.toggle('vclass')
    nav.classList.toggle('hnav')
})