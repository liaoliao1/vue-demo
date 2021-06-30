<template>
  <div>
    <div>click {{count}} times, count is {{type}}</div>
    <button @click="add">+</button>
    <button @click="decrement">-</button>
    <button @click="addIfOdd">increment if odd</button>
    <button @click="addAsync">increment async</button>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default{
  mounted () {
    console.log(this)
  },
  /* computed: {
    count () {
      return this.$store.state.count
    },
    type () {
      return this.$store.getters.type
    }
  }, */
  computed: {
    ...mapState(['count']),
    ...mapGetters({
      type: 'type'
    })
  },
  methods: {
    ...mapMutations({
      add: 'ADD',
      decrement: 'DECREMENT'
    }),
    ...mapActions(['addIfOdd', 'addAsync'])
  }
  /* methods: {
    add () {
      this.$store.commit('ADD')
    },
    decrement () {
      this.$store.dispatch('decrement')
    },
    addIfOdd () {
      this.$store.dispatch('addIfOdd')
    },
    addAsync () {
      this.$store.dispatch('addAsync')
    }
  } */
}
</script>

<style scoped>

</style>
