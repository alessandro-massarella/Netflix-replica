// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato:
// Titolo
// Titolo Originale
// Lingua
// Voto
const API_KEY = '02a542c8f8c1d3909cadbfdcc1deab24'

const myApp = new Vue ({

  el: '#myApp',

  data: {
    movieSearch: [],
    querySearch: '',
  },

  methods: {
    submitSearch: function() {
      axios
            .get ('https://api.themoviedb.org/3/search/movie', {
              params: {
                'api_key': API_KEY,
                'query': this.querySearch
              }
            })
            .then ( (result) => {
              console.log(result)
              this.movieSearch = result.data.results
              console.log(this.movieSearch)
            })
    }
  }
});
