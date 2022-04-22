<template>
  <span>
    <Nav></Nav>
    <router-view @click="setExpanded" />
    <Footer></Footer>
  </span>
</template>

<script>
import Footer from "./components/footer";
import Nav from "./components/nav";
export default {
  name: "App",
  components: {
    Footer,
    Nav,
  },
  created() {},
  watch: {},
  methods: {},
};
</script>

<style>
html {
  background-color: white;
}
#app {
  margin: 0;
  padding: 0;
  height: 100%;
}

* {
  padding: 0px;
  margin: 0px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-display: swap;
}
</style>
