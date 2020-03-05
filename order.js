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


let linkArray = ['link1'];
let descArray = ['desc1'];

(function addOrder (){
    document.querySelector('button.add').addEventListener('click', e => {
        e.preventDefault();
        const rand = Math.floor(1000 * Math.random());
        const section = document.querySelector('.orderList');
        const div = document.createElement('div');
        const url = document.createElement('input');
        url.type = "url";
        url.name = `link${rand}`;
        url.id = 'link';
        url.placeholder = "Input order link";
        const close = document.createElement('span');
        close.innerText = '✖';
        close.className = 'delOrder'
        const desc = document.createElement('textarea');
        desc.name = `desc${rand}`;
        desc.id = 'desc';
        desc.placeholder="additional information";

        div.appendChild(url);
        div.appendChild(close)
        div.appendChild(desc);
        section.appendChild(div);

        linkArray.push(url.name);
        descArray.push(desc.name);
        
        // console.log(linkArray);
        // console.log(descArray);
    })
}());

(function delOrder (){
    let target = document.querySelector('section.orderList');
    target.addEventListener('click', e => {
        if(e.target.className === 'delOrder'){
            // console.log(e.target.parentElement.querySelector('#link').name);
            // console.log(e.target.parentElement.querySelector('#desc').name);
            let linkIndex = linkArray.indexOf(`${e.target.parentElement.querySelector('#link').name}`);
            let descIndex = descArray.indexOf(`${e.target.parentElement.querySelector('#desc').name}`);
            // console.log(linkIndex);
            // console.log(descIndex);
            linkArray.splice(`${linkIndex}`, 1);
            descArray.splice(`${descIndex}`, 1);
            const p = e.target.parentElement;
            p.parentNode.removeChild(p);
        }
    })
}());