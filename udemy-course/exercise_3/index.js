var app = new Vue({ 
    el: '#app',
    data: {
      password: '',
      categories: [
        {name: 'Javascript', sub: ['Vue', 'React'] },
        {name: 'Databases', sub: ['Mysql', 'PostgreSql'] }
      ]      
    }
    
});