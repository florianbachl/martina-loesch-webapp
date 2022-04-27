<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid col-xl-10">
         <router-link class="navbar-brand" to="/">Navbar</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link mx-2" :to="{ path: '/', hash: '#kinesiologie' }">
                Kinesiologie</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link mx-2" :to="{ path: '/', hash: '#cranio' }">Cranio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link mx-2" :to="{ path: '/', hash: '#behandlung' }" >
                Behandlung</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link mx-2" :to="{ path: '/', hash: '#about' }">Über mich</router-link>
            </li>
          </ul>
           <router-link to="/contact">
          <button class="btn btn-secondary" type="button">
            Jetzt Kontaktieren
          </button></router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "nav-comp",
  data() {
    return {};
  },
  components: {},
  computed: {},
  watch: {},
  methods: {},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>

.navbar{
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.08);
}
</style>
