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
    var par = event.target.parentNode.parentNode
    if(par.firstChild.classList.contains("material-icons")){
        par.removeChild(par.childNodes[0]);
    }else{
        par.insertBefore(createActive(), par.firstChild);
    }
    
}, false);

