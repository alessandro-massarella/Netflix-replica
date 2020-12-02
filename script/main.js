// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato:
// Titolo
// Titolo Originale
// Lingua
// Voto



const myApp = new Vue ({

  el: '#myApp',

  data: {
    movieDatabase: [],

  },
  mounted: function() {
    const API_KEY = '02a542c8f8c1d3909cadbfdcc1deab24'

    axios
          .get ('https://api.themoviedb.org/3/search/movie', {
            params: {
              'api_key': '02a542c8f8c1d3909cadbfdcc1deab245',
              'query': 'future'
            }
          })
  },

});
