const hamburgerToggle=document.querySelector(".hamburger");
const navLinks=document.querySelector(".navLink_container");
const ToggleNav=()=>{
    hamburgerToggle.classList.toggle("open");
    navLinks.classList.toggle("open");
}
hamburgerToggle.addEventListener("click",ToggleNav);
new ResizeObserver(entries => {
    if(entries[0].contentRect.width<= 900){
        navLinks.style.transition="transform 0.3s ease-out"
    }else{
        navLinks.style.transition="none"
    }
}).observe(document.body)