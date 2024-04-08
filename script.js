const apikey = "e17c01c1";
const searchInput = document.getElementById("search");
const movieList = document.querySelector("#movie-list");
const searchBtn = document.getElementById("search-btn");
const emptyMovie = document.getElementById("empty-movie");
fetch(`https://www.omdbapi.com/?apikey=${apikey}`)
.then(res=>{
  console.log( res.json())
}

)
.then(data=>{
  console.log(data)
})

//  GET MOVIE DATA FORM API
// async function getMovie(movieName) {
//   try {
//     const response = await fetch(
//       `https://www.omdbapi.com/?apikey=${apikey}&s=${movieName}&plot=full`
//     );
//     console.log(response);
//     if (!response.ok) {
//       throw Error("Something went wrong");
//     }

//     const data = await response.json();

//     if (data.Search && data.Search.length > 0) {
//       data.Search.forEach((item) => {
//         fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${item.imdbID}`)
//           .then((res) => res.json())
//           .then((movie) => {
//             movieList.innerHTML += `
//               <div class="movie">
//                 <img src="${movie.Poster}" alt="" />
//                 <div class="movie-content">
//                   <div class="top-movie-rate">
//                     <span class="title">${movie.Title}</span>
//                     <div class="star-rate">
//                       <i class="fa-solid fa-star" style="color: #ffd43b"></i>
//                       <span>${movie.imdbRating}</span>
//                     </div>
//                   </div>
//                   <div class="movie-time">
//                       <span><span class="time">${movie.Runtime}</span></span>
//                       <span><span class="gan">${movie.Genre}</span></span>
//                       <span class="add-film " > <img src="image/Icon.png" alt="" id="add-film">
//                               Watchlist</span>
//                   </div>
//                   <p class="movie-desc">${movie.Plot}</p>
//                 </div>
//               </div>
//             `;
//           });
//       });
//     } else {
//       console.log("No movies found");
//     }
//   } catch (err) {
//     console.error(err);
//   }
// }

// // Get input's value
// searchBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   emptyMovie.style.display = "none";
//   const searchItem = searchInput.value.trim();
//   if (searchItem) {
//     getMovie(searchItem);
//     searchInput.value = "";
//   }
// });

// // Function to save movie to local storage
// function saveToWatchlist(movie) {
//   let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
//   watchlist.push(movie);
//   localStorage.setItem("watchlist", JSON.stringify(watchlist));
// }

// // Event delegation for add-film elements
// document.addEventListener("click", (event) => {
//   if (event.target && event.target.classList.contains("add-film")) {
//     const movieElement = event.target.closest(".movie");
//     const movieData = {
//       title: movieElement.querySelector(".title").textContent,
//       rating: movieElement.querySelector(".star-rate span").textContent,
//       runtime: movieElement.querySelector(".time").textContent,
//       genre: movieElement.querySelector(".gan").textContent,
//       plot: movieElement.querySelector(".movie-desc").textContent,
//       poster: movieElement.querySelector("img").src,
//     };
//     saveToWatchlist(movieData);

//     event.target.classList.add("added-to-watchlist");
//     event.target.textContent = " added";
//   }
// });
