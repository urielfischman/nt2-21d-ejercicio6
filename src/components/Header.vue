<template>
  <section class="src-components-header">
    <div id="header" :style="getHeaderStyle">
      <h1>
        The Great <br />
        <span id="colorDisplay">{{ getCorrectColor }}</span>
        <br />
        Guessing Game
      </h1>
      <Navigator/>
    </div>
  </section>
</template>


<script lang="js">
  import Navigator from "./Navigator.vue";
  export default  {
    name: 'src-components-header',
    components: {
      Navigator
    },
    props: [],
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

<style lang="css">
.src-components-header {
}
h1 {
  font-weight: normal;
  line-height: 1.1;
  margin: 24.12px;
  padding: 20px 0;
}
#header {
  transition: all 0.3s;
  background: steelblue;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: white;
}
#colorDisplay {
  font-size: 200%;
}
</style>
