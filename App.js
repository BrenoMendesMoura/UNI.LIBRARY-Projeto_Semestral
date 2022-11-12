const base_url = "https://api.jikan.moe/v4";


function searchAnime(event){

    event.preventDefault();

    const form = new FormData(this);
    const query = form.get("search");

    fetch(`${base_url}/anime?q=${query}&page=1`)
    .then(res=>res.json())
    .then(updateDom)
    .catch(err=>console.warn(err.message));
}

function updateDom(data){

    const searchResults = document.getElementById('search-results');
    //console.log(data.data);
    const animeByCategories = data.data
        .reduce((acc, anime)=>{

            const {type} = anime;
            if(acc[type] === undefined) acc[type] = [];
            acc[type].push(anime);

            return acc;

        }, {});

        searchResults.innerHTML = Object.keys(animeByCategories).map(key=>{

            const animesHTML = animeByCategories[key]
            
            .sort((a,b)=>a.episodes-b.episodes)
            .map(anime=>{
                return `
<!-- Button trigger modal -->
  <div class="col-2 text-center text-dark">
  
<a href="${anime.url}" class="imagem" data-bs-toggle="modal" data-bs-target="#exampleModal${anime.mal_id}">
  <img src="${anime.images.jpg.large_image_url}" style="max-width: 15rem; max-height: 15rem;" type="button" class="card-img-top rounded-4 btn-transparent bg-transparent border-transparent mb-5" alt="...">
  </a>
  <h5 class="modal-title text-center mb-2" id="exampleModalLabel" style="color:#80489C;">${anime.title}</h5>
  </div>

<!-- Modal -->
<div class="modal fade" id="exampleModal${anime.mal_id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-xl">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title text-center" id="exampleModalLabel">${anime.title}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body text-center">
      <img src="${anime.images.jpg.image_url}" style="width: 20rem; height: 20rem;" class="card-img-center rounded-4 btn-transparent bg-transparent border-transparent mb-5 text-center" alt="...">
    </div>

        
    <hr>
    <p class="p-4">Sinopse:<br>${anime.synopsis}</p>
    <p class="p-4">Tipo: ${anime.type}</p>
    <p class="p-4">Membros no fórum: ${anime.members}</p>

    <div class="modal-footer">
      <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
      <a type="button" class="btn btn-outline-success" href="${anime.url}">My anime list</a>
    </div>
  </div>
</div>
</div>`
            }).join("");


            return `
                <section>
                    <h3  class=" text-left" style="color:#80489C;">${key}</h3>
                    <div class="kemicofa-row mb-1 text-left" style="margin-top: 1rem;color:#80489C">${animesHTML}</div>
                    <hr class="" style="color:#80489C;">
                </section>
            `
        }).join("");
}

function searchManga(event){

    event.preventDefault();

    const form = new FormData(this);
    const query = form.get("search_manga");

    fetch(`${base_url}/manga?q=${query}&page=1&rated=PG13`)
    .then(res=>res.json())
    .then(updateDomManga)
    .catch(err=>console.warn(err.message));
}

function updateDomManga(data){

    const searchResults = document.getElementById('search-results-manga');
    console.log(data.data);
    const animeByCategories = data.data
        .reduce((acc, manga)=>{

            const {type} = manga;
            if(acc[type] === undefined) acc[type] = [];
            acc[type].push(manga);
            return acc;

        }, {});

        searchResults.innerHTML = Object.keys(animeByCategories).map(key=>{

            const mangaHTML = animeByCategories[key]
            .sort((a,b)=>a.episodes-b.episodes)
            .map(manga=>{
                return `<!-- Button trigger modal -->
                <div class="col-2 text-center text-dark">
                
              <a href="${manga.url}" class="imagem" data-bs-toggle="modal" data-bs-target="#exampleModal${manga.mal_id}">
                <img src="${manga.images.jpg.large_image_url}" style="max-width: 15rem; max-height: 15rem;" type="button" class="card-img-top rounded-4 btn-transparent bg-transparent border-transparent mb-5" alt="...">
              </a>
              <h5 class="modal-title text-center mb-2 " id="exampleModalLabel" style="color:#80489C;">${manga.title}</h5>
                </div>
              
              <!-- Modal -->
              <div class="modal fade" id="exampleModal${manga.mal_id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title text-center" id="exampleModalLabel">${manga.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body text-center">
                    <img src="${manga.images.jpg.image_url}" style="width: 20rem; height: 20rem;" class="card-img-center rounded-4 btn-transparent bg-transparent border-transparent mb-5 text-center" alt="...">
                  </div>

                  <hr>
                  <p class="p-4">Sinopse:<br>${manga.synopsis}</p>
                  <p class="p-4">Tipo: ${manga.type}</p>
                  <p class="p-4">Membros no fórum: ${manga.members}</p>
              
                  <div class="modal-footer">
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                    <a type="button" class="btn btn-outline-success" href="${manga.url}">My anime list</a>
                  </div>
                </div>
              </div>
              </div>`
            }).join("");


            return `
                <section>
                    <h3 class="text-left">${key}</h3>
                    <div class="kemicofa-row mb-1 text-left" style="margin-top: 1rem;color:#80489C ;">${mangaHTML}</div>
                    <hr class="">
                </section>
            `
        }).join("");
}

function pageLoaded(){
    const form = document.getElementById('search_form');
    form.addEventListener("submit", searchAnime);
}
function pageLoadedManga(){
    const form_manga = document.getElementById('search_manga');
    form_manga.addEventListener("submit", searchManga);
}


window.addEventListener("load", pageLoaded);
window.addEventListener("load", pageLoadedManga);


