const section1 = document.querySelector('#section');
const dash = document.querySelector('#dashboard');

function menu1(){
    dash.addEventListener('click', function(){
        section1.innerHTML = `
        <div class="cards">
            <h1 style="color: white">
            Bienvenue au dashboard
            </h1>
        </div>`
        })
}