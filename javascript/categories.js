const categori = document.querySelector('#categories');
const section4 = document.querySelector('#section');

function menu4(){
    categori.addEventListener('click', function(){
      section4.innerHTML = `
        <div class="cards">
      <h1 style="color: white">
        categories
      </h1>
      <div class="services">
        <div class="content content-1">
          <h2>
            Rock
          </h2>
        </div>
      </div>
      <div class="content content-2">
      <h2>
        Rap
      </h2>
    </div>
    <div class="content content-3">
    <h2>
      Electro
    </h2>
  </div>
  <div class="content content-4">
  <h2>
    Classique
  </h2>
</div>
    </div>`
  })
}