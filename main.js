const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')


fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game',{
  method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ea11628bc3msh9bce3efeff26503p1bb3e5jsn6a1ee7a21e4e',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
})
.then(response => response.json())
.then(data => {
  console.log(data);
  console.log(data.d);
  showMovies(data.d);  
})
.catch(err => {
  console.error(err);


});


function showMovies(movies) {
    main.innerHTML = ''
    movies.forEach((item, i) => {
        const movieEl = document.createElement('div')
        const name = item.l;
        const poster = item.i.imageUrl;
        movieEl.classList.add('movie')

        if (i === 0) {
          // İlk kartın HTML yapısı
          movieEl.innerHTML = `
          <li>
          <img src="${poster}">
          <div class="overview">
            <h3>Online Movie</h3>
            <h5>Database -Game-</h5>
            <p class="first-p">${item.s}</p>
            <span class="first">Rapid Api</span>
          </div>
          <h2>${name}</h2>
        </li>
      `;
        } else {
          // Diğer kartların HTML yapısı
          movieEl.innerHTML = `
            <li>
              <img src="${poster}">
              <div class="overview">
                <h5>${item.q}</h5>
                <h3>${item.y}</h3>
                <div class="stars">
                  <p>Stars</p>
                  <p>${item.s}</p>
                </div>
                <span class="${colorRank(item.rank)}">Rank: ${item.rank}</span>
              </div>
              <h2>${name}</h2>
            </li>
          `;
        }
  
      main.appendChild(movieEl)
    })
}
  
function  colorRank(rank) {

  if (rank <= 1000) {
    return 'red'
  } else if (rank <= 1500) {
    return 'green'
  } else {
    return 'yellow'
  }
}
const socialButton = document.querySelector("#social-button");
const buttonImage = document.getElementsByClassName('button-image');
const socialLinks = document.getElementById('social-links');
const deleteButton = document.getElementById('delete-button');
const searchButton = document.getElementById('search-button');

socialButton.addEventListener('click', () => {
  socialLinks.style.display = 'block';
  socialButton.style.display = "none";
  deleteButton.style.display = "block";
});

deleteButton.addEventListener('click', () => {
  socialLinks.style.display = 'none';
  socialButton.style.display = "block";
  deleteButton.style.display = "none";
});

searchButton.addEventListener('click', () => {
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
});