(function mobileNav () {
    const navbtn = document.querySelector('.menuBar');
    const nav = document.querySelector('.menuContainer');
    navbtn.addEventListener('click', e =>{
        if(nav.style.display === 'none'){
            nav.style.display = 'flex';
            navbtn.innerHTML = '&#10006;';
        }else{
            nav.style.display = 'none';
            navbtn.innerHTML = '&#9776;';
        }
    })
}());

(function dateTime (){
    const copyRightYear = document.querySelector('.cRY');
    const dT = new Date();
    const year = dT.getFullYear();
    copyRightYear.innerHTML = `${year}.`;
}());


(function addOrder (){
    document.querySelector('button.add').addEventListener('click', e => {
        e.preventDefault();
        const section = document.querySelector('.orderList');
        const div = document.createElement('div');
        const url = document.createElement('input');
        url.type = "url";
        url.placeholder = "Input order link";
        const close = document.createElement('span');
        close.innerText = '✖';
        close.className = 'delOrder'
        const desc = document.createElement('textarea');
        desc.placeholder="additional information";

        div.appendChild(url);
        div.appendChild(close)
        div.appendChild(desc);
        section.appendChild(div);
    })
}());

(function delOrder (){
    let target = document.querySelector('section.orderList');
    target.addEventListener('click', e => {
        if(e.target.className === 'delOrder'){
            const p = e.target.parentElement;
            p.parentNode.removeChild(p);
        }
    })
}());