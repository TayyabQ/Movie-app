const fetchMovies = async () => {
    const url = 'https://imdb236.p.rapidapi.com/imdb/lowest-rated-movies';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '04c81fee32msh8537018ffa82bdap12ac32jsnbfef869e9c2a',
        'x-rapidapi-host': 'imdb236.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result); // View structure to get correct array
  
      // Assuming the array of movies is under result.titles
      result.forEach(element => {
        const movieCard = document.createElement("div");
        movieCard.className = "movie-card";

        const movieDescription= document.createElement("p");
        movieDescription.className = "movie-description";
        movieDescription.textContent = element.description;

        const movieTitle = document.createElement("p");
        movieTitle.className = "movie-title";
        movieTitle.textContent = element.originalTitle;

        const movieIcon = document.createElement("img");
        movieIcon.className = "movie-icon";
        movieIcon.src = element.primaryImage;

        const moviePlay = document.createElement("button");
        moviePlay.className = "movie-play";
        moviePlay.textContent = "▶ Play Movie";
        moviePlay.addEventListener("click", function(){
            window.open(element.url, "_blank");
        })
        
        const movieRelease = document.createElement("p");
        movieRelease.className = "movie-release";
        movieRelease.textContent = element.releaseDate;

        const movieTrailer = document.createElement("button");
        movieTrailer.className = "movie-trailer";
        movieTrailer.textContent = "Watch Trailer";
        movieTrailer.addEventListener("click", function () {
            window.open(element.trailer, "_blank");
        });

        const movieRating = document.createElement("p");
        movieRating.className = "movie-rating";
        movieRating.textContent = element.contentRating;

        movieCard.appendChild(movieTitle);
        movieCard.appendChild(movieIcon)
        movieCard.appendChild(moviePlay);
        movieCard.appendChild(movieDescription);
        movieCard.appendChild(movieRelease);
        movieCard.appendChild(movieTrailer);
        movieCard.appendChild(movieRating);
        

        const main = document.getElementById("movie-container");
        main.appendChild(movieCard);
      });
  
    } catch (error) {
      console.error(error);
    }
  };
  
  fetchMovies();
  