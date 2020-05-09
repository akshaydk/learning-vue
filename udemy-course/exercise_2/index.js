var app = new Vue({ 
    el: '#app',
    data: {
      input: '',
      input2: ''
    },
    methods: {
       keyUp: function(event) {
        this.input = event.target.value
      },
      onCtrlEnter: function(event) {
       this.input2 = event.target.value
     }
      
    }
});