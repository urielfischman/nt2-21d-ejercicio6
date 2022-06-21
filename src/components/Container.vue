<template>
  <section class="src-components-container">
    <div id="container">
      <div v-for="(color,index) in getColors" :key="index">
        <Square :color="color" :index="index"/>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import Square from "./Square/IndexSquare.vue";

export default  {
    name: 'src-components-container',
    components : {
      Square
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
     
    },
    computed: {
    }
}


</script>

<style scoped lang="css">
.src-components-container {
}
#container {
  margin: 20px auto;
  max-width: 600px;
}
</style>
