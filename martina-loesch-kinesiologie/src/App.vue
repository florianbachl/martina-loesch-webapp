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

.header {
  background:url("assets/sections/Group6.png");
  background-size:cover;
  background-position-y: 20%;
  min-height: 60vh;
}

* {
  padding: 0px;
  margin: 0px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-display: swap;
}

.bg-grey {
  background-color: #faf9fc;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6, .material-icons {
  color: #5f6574;
}

p {
  color: #8c909c;
}

.btn-primary{
  background: rgb(143,153,249);
background: linear-gradient(34deg, rgba(143,153,249,1) 0%, rgba(150,152,248,1) 44%, rgba(255,133,231,1) 100%);
border: none !important;
text-transform: uppercase;
border-radius: 5px !important;
padding: 0.75rem 1rem !important;

}

.btn-secondary-white{
background-color: rgba(143,153,249,0) !important;
border: 1px solid white !important;
color: white !important;
text-transform: uppercase;
border-radius: 5px !important;
padding: 0.75rem 1rem !important;

}

.btn-secondary{
background-color: white !important;
border: 1px solid #5f6574 !important;
color: #5f6574 !important;
text-transform: uppercase;
border-radius: 5px !important;
padding: 0.35rem 1rem !important;

}

.link-primary{
  color:  rgba(150,152,248,1) !important;
  text-transform: uppercase;
  letter-spacing: 1px;;
  font-weight: 500;
  text-decoration: none;
}

.bg-gradient-new{
   background: rgb(143,153,249);
background: linear-gradient(34deg, rgba(143,153,249,1) 0%, rgba(150,152,248,1) 44%, rgba(255,133,231,1) 100%);
}
</style>
