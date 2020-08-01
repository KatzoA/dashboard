const section6 = document.querySelector('#section');
const us = document.querySelector('#contact');

function menu6(){
    us.addEventListener('click', function(){
    section6.innerHTML = `
    <div class="cards">
        <h1 style="color: white">
        Contact
        </h1>
    </div>`
    })
}