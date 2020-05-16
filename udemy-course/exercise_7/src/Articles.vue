<template>
    <div class="article">
      <h1> {{ title }} </h1>
      <p> Published on {{ published | moment }} </p>
      <p class="lead"> {{ content }} </p>
      <author></author>
    </div>
</template>

<script>
    import moment from 'moment';
    import Author from './Author.vue';
    export default {
        data() {
            return {
                title: 'Hello',
                published: new Date(),
                content: 'This is a sample article.',
            };
        },
        components: {
          author: Author
        },
        filters:{
          moment: function(value){
            return moment(value).format('MMMM Do');
          }
        }
    }
</script>