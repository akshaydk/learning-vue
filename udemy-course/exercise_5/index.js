var app = new Vue({ 
    el: '#app',
    data: {
      message: 'hello world!'
    },
    filters: {
      uwfirst: function(value){        
        var parts = value.toString().split(' ')
        var ucWords = parts.map(function(word){
          return word.charAt(0).toUpperCase() + word.slice(1)
        })
        return ucWords.join(' ')
      },
      removeSpaces: function(value){
        return value.toString().replace(' ', '')
      }
    }
});