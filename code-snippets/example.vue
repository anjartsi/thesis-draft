<template>
  <div>
    <h1>Example Vue Component</h1>
      <p> {{num}} </p>
      <button @click='increment'> Plus One</button>
      <button @click='decrement'> Minus One</button>
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
    text-align: center;
    border: 1px solid black;
  }
</style>