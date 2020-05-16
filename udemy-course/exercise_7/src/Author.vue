<template>
    <div class="author">
      <small> Written by {{ author.firstName }} {{ author.lastName }}</small>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              author: { 
                firstName: "Sample",
                lastName: "Wala"
              }
            };
        }
    }
</script>