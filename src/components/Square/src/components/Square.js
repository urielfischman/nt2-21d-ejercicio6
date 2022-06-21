
export default {
  name: 'src-components-square',
  components: {},
  props: ['color','index'],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getStyle(){
      return {background : this.color}
    },
  }
}


