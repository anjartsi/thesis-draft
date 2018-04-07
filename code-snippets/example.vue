<template>
  <div>
    <h1>Example Vue Component</h1>
    <div>
      <p> {{num}} </p>
      <button @click='increment'> Plus One</button>
      <button @click='decrement'> Minus One</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    increment() {
      this.num = this.num + 1;
    },
    decrement() {
      this.num = this.num - 1;
    }
  }
};
</script>

<style scoped>
  div {
    border: 1px solid black;
  }
</style>