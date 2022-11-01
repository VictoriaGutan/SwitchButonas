const body = document.querySelector("body")
const p = document.createElement('p')
const p2=document.createElement('p')
const imagine= document.createElement('img')
body.style.backgroundColor='white'
p.textContent = 'Dark/Light Mode Switcher'
body.append(p)
body.append(imagine)
body.append(p2)
imagine.src='img/Luna.png'
imagine.style.width='50px';
p2.textContent='Just press the button above to toggle'
imagine.addEventListener('click',()=>{

    if(body.style.backgroundColor==='white'){
        imagine.style.filter='invert(0)'
        body.style.backgroundColor='black'
        p.style.color='white'
        p2.style.color='white'
    }else if (body.style.backgroundColor==='black'){
       imagine.style.filter='invert(1)'
        body.style.backgroundColor='white'
        p.style.color='black'
            p2.style.color='black'
    }

})





    // {/*const imagine= <img src="img/Luna.png" alt="imagine cu luna">*/







