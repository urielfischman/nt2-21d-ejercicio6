import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        isEasy: false,
        colors: [],
        correctColor: "",
        colorCount: 6,
        message : "",
        currentIndex : null,
        newColor : "",
        newRandomInt : null,
        correctColorIndex : null
    },
    actions : {
        restart({commit}) {
            commit('restart')
        },

        changeToEasy({commit}){
            commit('changeToEasy')
        },
    
        changeToHard({commit}){
            commit('changeToHard')
        },
          
        createColors({commit}){
            commit('createColors')
        }, 
          
        randomInt({commit}){
            commit('randomInt')  
        },

        createRandomStringColor({commit}){
            commit('createRandomStringColor')
        },

        pickCorrectColor({commit}){
            commit('pickCorrectColor')
        },

        setAllCorrectColor({commit}){
            commit('setAllCorrectColor')
        },

        changeByError({commit}){
            commit('changeByError')
        },

        isTheCorrectColor({commit}){
            commit('isTheCorrectColor')
        },

        setCurrentIndex({commit},index){
            commit('setCurrentIndex',index)
        }
    },
    mutations : {
        restart(state) {
            state.message = ""
            state.colors = []
            this.dispatch('createColors')
            this.dispatch('pickCorrectColor')
            state.correctColor = state.colors[state.correctColorIndex]
        },

        changeToEasy(state){
            if(!state.isEasy){
                state.colorCount = 3      
                state.isEasy = true
                this.dispatch('restart')
            }
        },
        
        changeToHard(state){
            if(state.isEasy){
                state.colorCount = 6
                state.isEasy = false
                this.dispatch('restart')
            }   
        },
          
        randomInt(state){
            state.newRandomInt = Math.floor(Math.random()*256)
        },

        createRandomStringColor(state){
            this.dispatch('randomInt')
            state.newColor = "rgb(" + state.newRandomInt + ", "
            this.dispatch('randomInt')
            state.newColor += state.newRandomInt + ", "
            this.dispatch('randomInt')
            state.newColor += state.newRandomInt + ")"
        },

        pickCorrectColor(state){
            state.correctColorIndex = Math.floor(Math.random() * state.colorCount);
        },

        createColors(state){
            for (var i = 0; i < state.colorCount; i++) {
                this.dispatch('createRandomStringColor')
                state.colors.push(state.newColor);
            }
        }, 

        setAllCorrectColor(state){
            var allToCorrect = []
            for (var i = 0; i < state.colorCount; i++) {
            allToCorrect.push(state.correctColor);
            }
            state.colors = allToCorrect
        },

        changeByError(state){
            var colorsChangedByError = []
            for (var i = 0; i < state.colorCount; i++) {
            if(i == state.currentIndex){
                colorsChangedByError.push("#232323");
            } else{
                colorsChangedByError.push(state.colors[i]);
            }
            }
            state.colors = colorsChangedByError
        },

        isTheCorrectColor(state){
            if(state.colors[state.currentIndex] == state.correctColor){
                state.message = "You Picked Right!"
                this.dispatch('setAllCorrectColor')
            }else{
                state.message = "Try again!"
                this.dispatch('changeByError')
            }
        },

        setCurrentIndex(state,index){
            state.currentIndex = index
            this.dispatch('isTheCorrectColor')
        }
    }
})