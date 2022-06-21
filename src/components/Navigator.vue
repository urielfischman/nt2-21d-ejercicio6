<template>
  <section>
    <div id="navigator">
      <button @click="restart()">{{getMessage ==  "You Picked Right!"? "Play again!" : "New colors!"}}</button>
      <span id="message"> {{getMessage}} </span>
      <button :class="{ selected: getIsEasy }" @click="changeToEasy()">
        easy
      </button>
      <button :class="{ selected: !getIsEasy }" @click="changeToHard()">
        hard
      </button>
    </div>
    <Container/>
  </section>
</template>

<script lang="js">
  import Container from "./Container.vue";
  export default  {
    name: 'src-components-navigator',
    components: {
      Container
    },
    props: [],
    beforeMount(){
       this.$store.dispatch('restart')
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
.src-components-navigator {
}
#navigator {
  background: #ffffff;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-top: -30px;
}
#message {
  color: #000000;
  display: inline-block;
  width: 20%;
  text-transform: none;
}
.selected {
  background-color: steelblue;
  color: white;
}
button {
  border: none;
  background-color: white;
  font-family: "Montserrat", "Avenir";
  text-transform: uppercase;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  color: steelblue;
  transition: all 0.3s;
  outline: none;
}
button:hover {
  color: white;
  background-color: steelblue;
}
h1 {
  color: white;
}
</style>
