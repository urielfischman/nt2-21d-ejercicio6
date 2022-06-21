import Vue from 'vue'

const miMixinGlobal = {
    methods: {
      restart() {
        this.$store.dispatch('restart')
      },
      changeToEasy(){
          this.$store.dispatch('changeToEasy')
      },
      changeToHard(){
          this.$store.dispatch('changeToHard')
      },
      setCurrentIndex(index){
        this.$store.dispatch('setCurrentIndex',index)
      },
    },
    computed: {
      getMessage() {
        return this.$store.state.message
      },
      getCorrectColor() {
        return this.$store.state.correctColor
      },
      getHeaderStyle(){
        return {background : this.$store.state.message != "You Picked Right!"? "steelblue" : this.$store.state.correctColor }
      },
      getIsEasy(){
        return this.$store.state.isEasy
      },
      getColors(){
        return this.$store.state.colors
      }
    }
}

Vue.mixin(miMixinGlobal)