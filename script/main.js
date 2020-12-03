const API_KEY = '02a542c8f8c1d3909cadbfdcc1deab24'

const myApp = new Vue ({

  el: '#myApp',

  data: {
    movieSearch: [],
    serieSearch: [],
    querySearch: '',
    // per il voto su 5 stelle:
    divisoreVoto: 2,
    // è presente la bandiera?
  },

  methods: {
    submitSearch: function() {
      axios
      // RICERCA FILM
            .get ('https://api.themoviedb.org/3/search/movie', {
              params: {
                'api_key': API_KEY,
                'language': 'it',
                'query': this.querySearch
              }
            })
            .then ( (result) => {
              console.log(result)
              this.movieSearch = result.data.results
              // console.log(this.movieSearch)
            })

      // RICERCA SERIE TV
      axios
            .get ('https://api.themoviedb.org/3/search/tv', {
              params: {
                'api_key': API_KEY,
                'language': 'it',
                'query': this.querySearch
              }
            })
            .then ( (result) => {
              console.log(result)
              this.serieSearch = result.data.results
              // console.log(this.movieSearch)
            })


    },

    stars: function (n) {
      return Math.ceil( n / this.divisoreVoto)
    },

    flagNotFound: function(e) {
      e.target.src = 'img/flags_png/no_image.png'
    },
    imgNotFound: function(e) {
      e.target.src = 'img/image_not_found.jpg'
    }
  }
});
