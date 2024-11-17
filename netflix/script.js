// let num = 0

// while (num < 5) {
//     num++  
//     console.log("MyNumber: ", num)
// }

// console.log("Help me")

const playDiv = document.getElementById("play")
const showDiv = "Hi, How are you doing?"
const showKeyDiv = document.getElementById("showKey")

playDiv.onclick = () => {
    playDiv.innerText = showDiv
}

document.addEventListener("keydown", function playDiv(e) {
    
    const keyme = "I Gat You 😎, You Click On "

    if (e.key == "a") {
       showKeyDiv.innerText = keyme +"A😚"
        
    }
  else if(e.key == "b") {
    showKeyDiv.innerText = keyme +"B😏"
   }
  else if(e.key == "c") {
    showKeyDiv.innerText = keyme +"C😂"
   }
  else if(e.key == "d") {
    showKeyDiv.innerText = keyme +"D😂"
   }
  else if(e.key == "e") {
    showKeyDiv.innerText = keyme +"E😂"
   }
  else if(e.key == "f") {
    showKeyDiv.innerText = keyme +"F😂"
   }
  else if(e.key == "g") {
    showKeyDiv.innerText = keyme +"G😂"
   }
  else if(e.key == "h") {
    showKeyDiv.innerText = keyme +"H😂"
   }
  else if(e.key == "i") {
    showKeyDiv.innerText = keyme +"I😂"
   }
  else if(e.key == "j") {
    showKeyDiv.innerText = keyme +"J😂"
   }
  else if(e.key == "k") {
    showKeyDiv.innerText = keyme +"K😂"
   }
  else if(e.key == "l") {
    showKeyDiv.innerText = keyme +"L😂"
   }
  else if(e.key == "m") {
    showKeyDiv.innerText = keyme +"M😂"
   }
  else if(e.key == "n") {
    showKeyDiv.innerText = keyme +"N😂"
   }
  else if(e.key == "o") {
    showKeyDiv.innerText = keyme +"O😂"
   }
  else if(e.key == "p") {
    showKeyDiv.innerText = keyme +"P😂"
   }
  else if(e.key == "q") {
    showKeyDiv.innerText = keyme +"Q😂"
   }
  else if(e.key == "r") {
    showKeyDiv.innerText = keyme +"R😂"
   }
  else if(e.key == "s") {
    showKeyDiv.innerText = keyme +"S😂"
   }
  else if(e.key == "t") {
    showKeyDiv.innerText = keyme +"T😂"
   }
  else if(e.key == "u") {
    showKeyDiv.innerText = keyme +"U😂"
   }
  else if(e.key == "v") {
    showKeyDiv.innerText = keyme +"V😂"
   }
  else if(e.key == "w") {
    showKeyDiv.innerText = keyme +"W😂"
   }
  else if(e.key == "x") {
    showKeyDiv.innerText = keyme +"X😂"
   }
  else if(e.key == "y") {
    showKeyDiv.innerText = keyme +"Y😂"
   }
  else if(e.key == "z") {
    showKeyDiv.innerText = keyme +"Z😂"
   }

  else {
    showKeyDiv.innerText = "Click Alphabet Only🤨"
   }
 

    
})



/* 
/* 
🌟 APP: Make Netflix

Create a fetchMovies() function that will make a dynamic API call to what you need 👇
========================================

- fetchMovies()

** fetchMovies takes in an URL, a div id or class from the HTML, and a path (poster or backdrop)



These are the 3 main functions you must create 👇
========================================

- getOriginals()

- getTrendingNow()

- getTopRated()


** These functions will provide the URL you need to fetch movies of that genere **

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 CLASS 👉 'original__movies' = Div that holds Netflix Originals
#2 ID 👉 'trending' = Div that holds trending Movies
#3 ID 👉 'top_rated' = Div that holds top rated Movies
*/

// Call the main functions the page is loaded
window.onload = () => {
  getOriginals()
  getTrendingNow()
  getTopRated()
}

// ** Helper function that makes dynamic API calls **
// path_type 👉 (backdrop, poster)
// dom_element 👉 (trending, top rated)
// fetchMovies('htt+ps://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1', 'top_rated', 'backdrop_path')
function fetchMovies(url, dom_element, path_type) {
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('something went wrong')
      }
    })
    .then(data => {
      showMovies(data, dom_element, path_type)
    })
    .catch(error_data => {
      console.log(error_data)
    })
}

//  ** Function that displays the movies to the DOM **
showMovies = (movies, dom_element, path_type) => {
  
  // Create a variable that grabs id or class
  var moviesEl = document.querySelector(dom_element)

  // Loop through object
  for (var movie of movies.results) {

    // Within loop create an img element
    var imageElement = document.createElement('img')

    // Set attribute
    imageElement.setAttribute('data-id', movie.id)

    // Set source
    imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`

    // Add event listener to handleMovieSelection() onClick
    imageElement.addEventListener('click', e => {
      handleMovieSelection(e)
    })
    // Append the imageElement to the dom_element selected
    moviesEl.appendChild(imageElement)
  }
}

// ** Function that fetches Netflix Originals **
function getOriginals() {
  var url =
    'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'
  fetchMovies(url, '.original__movies', 'poster_path')
}
// ** Function that fetches Trending Movies **
function getTrendingNow() {
  var url =
    'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'
  fetchMovies(url, '#trending', 'backdrop_path')
}
// ** Function that fetches Top Rated Movies **
function getTopRated() {
  var url =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'
  fetchMovies(url, '#top_rated', 'backdrop_path')
}

// ** BONUS **

async function getMovieTrailer(id) {
  var url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`
  return await fetch(url).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('something went wrong')
    }
  })
}

const setTrailer = trailers => {
  const iframe = document.getElementById('movieTrailer')
  const movieNotFound = document.querySelector('.movieNotFound')
  if (trailers.length > 0) {
    movieNotFound.classList.add('d-none')
    iframe.classList.remove('d-none')
    iframe.src = `https://www.youtube.com/embed/${trailers[0].key}`
  } else {
    iframe.classList.add('d-none')
    movieNotFound.classList.remove('d-none')
  }
}

const handleMovieSelection = e => {
  const id = e.target.getAttribute('data-id')
  const iframe = document.getElementById('movieTrailer')
  // here we need the id of the movie
  getMovieTrailer(id).then(data => {
    const results = data.results
    const youtubeTrailers = results.filter(result => {
      if (result.site == 'YouTube' && result.type == 'Trailer') {
        return true
      } else {
        return false
      }
    })
    setTrailer(youtubeTrailers)
  })

  // open modal
  $('#trailerModal').modal('show')
  // we need to call the api with the ID
}




