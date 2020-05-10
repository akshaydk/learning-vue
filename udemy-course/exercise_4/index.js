var app = new Vue({ 
    el: '#app',
    data: {
      movies: [
        { name: 'The Matrix', year: 1999 },
        { name: 'The Matrix Reloaded', year: 2003 },
        { name: 'The Matrix Revolution', year: 2003 }
      ]        
    },
    computed: {
      formattedMovies: function(){        
        return this.movies.map(function(movie){
          return movie.name + ' (' + movie.year +')';
        });
      }  
    },
    methods: {
      addMovie: function(){
        this.movies.push({ name: 'The New Movie', year: 2020 })
      }
    },
    watch:{
      movies: function(movies){
        var newM = movies[movies.length-1]
        alert(newM.name + ' from ' + newM.year + ' has been added.')
      }
    }
    
    
});