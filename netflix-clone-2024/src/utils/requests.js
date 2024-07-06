const API_KEY = process.env.REACT_APP_API_KEY;;
// 
const requests = {
     fetchTrending:`/trending/all/week?api_key=${API_KEY}&llanguage=en-US,`,
     fetchNetflixOrginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
     fetchTopRatedMovies:`/discover/movie?api_key=${API_KEY}c&with_genres=35`,
     fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
     fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
     fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
     fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=49`,
     fetchTvShow:`/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};  
export default requests;   
