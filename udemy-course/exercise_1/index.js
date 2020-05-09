var app = new Vue({ 
    el: '#app',
    data: {
        movieTitle: 'The Matrix',
        releaseYear: 2001
    },
    methods: {
       isold: function(releaseYear) {
        return  releaseYear < 2000 ? 'Old' : 'New'
      }
    }
});