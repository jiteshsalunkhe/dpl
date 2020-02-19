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