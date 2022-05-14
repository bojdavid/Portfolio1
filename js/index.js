const dropdownIcon = document.getElementById('dropdown-icon');
const dropdown = document.getElementById('dropdown');
const menu = document.querySelector('#menu');
const menuItems = document.querySelectorAll('.menu-item')
const sections = document.getElementsByTagName('section')
const home = document.getElementById('home')

menu.addEventListener('click',(e)=>{
    const clickedItem = e.target.parentElement
    for(let j = 0; j<menuItems.length; j++){
        menuItems[j].classList.remove('active')
        if(clickedItem == menuItems[j]){
            if(!menuItems[j].classList.contains('active')){
                menuItems[j].classList.add('active')
            }
        }
    }
    
})


document.addEventListener('click', (e)=>{
    if(e.target.parentElement == dropdownIcon){
        if(dropdown.classList.contains('hidden')){
            dropdownIcon.classList.add('rotate')
            dropdown.classList.remove('hidden')
            dropdown.classList.remove('slide-menu-out')
        }
        else{
            dropdownIcon.classList.remove('rotate');
            dropdown.classList.add('slide-menu-out')
            setTimeout(()=>{
                dropdown.classList.add('hidden');
            },1500)
            
        }
        
    }
    else if(e.target == dropdown || e.target.classList.contains('stay')){
        if(!dropdown.classList.contains('hidden')){
            return
        }
    }
    else{ 
        if(!dropdown.classList.contains('hidden')){
            dropdownIcon.classList.remove('rotate');
            dropdown.classList.add('slide-menu-out')
            setTimeout(()=>{
                dropdown.classList.add('hidden');
            },1500)
        }
    }
    
})

console.log(window.innerHeight)
function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= -50) && (elemTop <= 50);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

document.addEventListener('scroll', ()=>{
    
    
    for(let k = 0; k< sections.length; k++){
        let isSrolled = isScrolledIntoView(sections[k]);
        console.log(isSrolled)
        for(let l = 0; l< menuItems.length; l++){
         if(sections[k] == menuItems[l] && isSrolled){
            if(!menuItems[j].classList.contains('active')){
                menuItems[j].classList.add('active')
            }
               
        }
        }
    }
    
})
