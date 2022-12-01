const btn = document.getElementById('btn')
btn.addEventListener('click',()=>{
    btn.previousElementSibling.firstElementChild.style.color = "red"
    btn.previousElementSibling.lastElementChild.children[1].style.fontSize = "50px"
})