const API_KEY = "45cf8b9e5306495bf848eb8ab9bd82fa"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`
}

export default requests;

// 45cf8b9e5306495bf848eb8ab9bd82fa API Key
// Ex API request https://api.themoviedb.org/3/movie/550?api_key=45cf8b9e5306495bf848eb8ab9bd82fa

/*
[√]INSTALL AXIOS
[√]API KEY
[√]CREATE SEPERATE FILE FOR REQUESTS
[√]COMPONENT FOR ROWS
[√]DISPLAY MOVIES
[]SIDE LEFT & RIGHT SCROLL
[]PRACTICE JSON FILE
*/