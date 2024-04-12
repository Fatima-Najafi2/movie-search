document.addEventListener('DOMContentLoaded', () => {
  const watchlistContainer = document.querySelector('.movie-list');
  // Function to save updated watchlist to local storage
  function updateWatchlist(watchlist) {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }

  // Function to remove a movie from the watchlist
  function removeFromWatchlist(movieTitle) {
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    watchlist = watchlist.filter((movie) => movie.title !== movieTitle);
    updateWatchlist(watchlist);
    renderWatchlist(watchlist);

   
  }

  // Function to render watchlist items
  function renderWatchlist(watchlist) {
    watchlistContainer.innerHTML = '';
    if (watchlist.length > 0) {
      watchlist.forEach((movie) => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie');
        movieItem.innerHTML = `
          <img src="${movie.poster}" alt="" />
          <div class="movie-content">
            <div class="top-movie-rate">
              <span class="title">${movie.title}</span>
              <div class="star-rate">
                <i class="fa-solid fa-star" style="color: #ffd43b"></i>
                <span>${movie.rating}</span>
              </div>
            </div>
            <div class="movie-time">
              <span><span class="time-du">${movie.runtime}</span></span>
              <span><span class="gan">${movie.genre}</span></span>
              <span class="remove-film" data-title="${movie.title}"> <img src="./Icon (2).png" alt="">
                            Remove</span>
            </div>
            <p class="movie-desc">${movie.plot}</p>
          </div>
        `;
        watchlistContainer.appendChild(movieItem);
      });
    } else {
      const emptyWatchlist = document.querySelector('.empty-watchlist');
      emptyWatchlist.style.display = 'flex';
    }
  }

  // Event delegation for remove-film elements
  watchlistContainer.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('remove-film')) {
      const movieTitle = event.target.getAttribute('data-title');
      removeFromWatchlist(movieTitle);
    }
  });

  // Initial rendering of watchlist
  const watchlistData = JSON.parse(localStorage.getItem('watchlist')) || [];
  renderWatchlist(watchlistData);
});
