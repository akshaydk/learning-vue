var items = []

Vue.component('todo-item', {
  props: ['todo'],
  template: '<ol> <input type="checkbox"> <label> {{ todo.text }}</label> </ol>'
})

var item = new Vue({
  el: '#todo',
  data: {
    item: '',
    todos: items
  },
  methods: {
    add: function() {
      if(this.item.length > 0){
        items.push({text: this.item})
        this.item = ''
      }      
    },
    completed: function(){
      
    },
    remove: function(){
      
    },
    clear: function(){
      items.splice(0,items.length)
    }
  }
})

