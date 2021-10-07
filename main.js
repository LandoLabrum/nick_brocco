function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function createActive() {
    let li = document.createElement('span');
    li.classList.toggle("material-icons")
    li.classList.toggle("acti")
    li.classList.toggle("green-text")
    li.textContent = 'check_circle';
    return li;
}

document.addEventListener('click', function (event) {
    if (!event.target.matches('.event')) return;
    event.preventDefault();
    var par = event.target.parentNode
    console.log(par.classList.contains("green"))
    // if(!par.classList.contains("green")){
        // par.removeChild(par.childNodes[0]);
    //     par.classList.toggle("box-content-color");
    //     par.childNodes[1].classList.toggle("white-text");
    // }else{
        // par.classList.toggle("gray lighten-3");
        // par.insertBefore(createActive(), par.firstChild);
    // }
    par.classList.toggle("box-content-color");
    par.classList.toggle("white-text");
    
}, false);

