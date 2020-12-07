const API_KEY = '02a542c8f8c1d3909cadbfdcc1deab24';
const movieUrl = 'https://api.themoviedb.org/3/search/movie';
const serieUrl = 'https://api.themoviedb.org/3/search/tv'

const myApp = new Vue ({

  el: '#myApp',

  data: {
    movieSearch: [],
    serieSearch: [],
    querySearch: '',
    // per il voto su 5 stelle:
    divisoreVoto: 2,
    hover: false,
    isVisible: false,
  },

  methods: {
    submitSearch: function() {
      this.isVisible= true,

    axios.all([
      axios.get(movieUrl, {
              params: {
                'api_key': API_KEY,
                'language': 'it',
                'query': this.querySearch
              }
            }),
      axios.get(serieUrl, {
              params: {
                'api_key': API_KEY,
                'language': 'it',
                'query': this.querySearch
              }
            })
    ])
          .then(axios.spread((result1, result2) => {
            this.movieSearch = result1.data.results;
            this.serieSearch = result2.data.results;
          }));


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
