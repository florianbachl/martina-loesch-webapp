<template>
  <div id="footer">
    <!-- Footer -->
    <footer class="text-center text-lg-start bg-dark text-white">
      <!-- Section: Social media -->

      <!-- Section: Social media -->

      <!-- Section: Links  -->
      <section class="">
        <div class="container text-center text-white text-md-start pt-5">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4 text-white">Themen</h6>
              <p>
                <router-link to="/#kinesiologie" class="text-white"
                  >Kinesiologie</router-link
                >
              </p>
              <p>
                <router-link to="/#cranio" class="text-white"
                  >Cranio</router-link
                >
              </p>
              <p>
                <router-link to="/#behandlung" class="text-white"
                  >Behandlung</router-link
                >
              </p>
              <p>
                <router-link to="/#about" class="text-white"
                  >Über mich</router-link
                >
              </p>
            </div>
            <!-- Grid column -->

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4 text-white">Kontakt</h6>
              <p>
                <router-link to="/contact" class="text-white"
                  >Kontaktformular</router-link
                >
              </p>
              <hr class="my-4" />
              <p class="text-white">
                <i class="fas fa-envelope"></i>
                hello@kinesiologie-martina.at
              </p>
              <p class="text-white">
                <i class="fas fa-phone text-white"></i> +43 699 10994684
              </p>
            </div>

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4 text-white">Anfahrt</h6>
              <p class="text-white">
                <i class="fas fa-home text-white"></i> Wohnpark Ager 17
              </p>
              <p class="text-white">
                <i class="fas fa-home text-white"></i> 4860 Lenzing
              </p>
              <p class="text-white">
                <i class="fas fa-home text-white"></i> Österreich
              </p>
            </div>
            <!-- Grid column -->
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <!-- Content -->
              <img
                src="../assets/sections/logo.png"
                height="80"
                class="bg-white px-3 rounded"
                alt=""
              />
            </div>
            <!-- Grid column -->
          </div>
          <hr />
          <p>
            <span class="px-3">
              <router-link to="/impressum" class="text-white"
                >Impressum</router-link
              >
            </span>
            <span class="px-3">
              <router-link to="/datenschutz" class="text-white"
                >Datenschutz</router-link
              ></span
            >
          </p>
          <div
            class="text-left py-4"
            style="background-color: rgba(0, 0, 0, 0.05)"
          >
            Design und Umsetzung:
            <a href="https://www.florianbachl.at" class="text-white fw-bold"
              >Florian Bachl Software & Webdesign</a
            >
            <p>© 2022 Copyright: Kinesiologie Martina</p>
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->

      <!-- Copyright -->

      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>
export default {
  name: "footer-comp",
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
<style scoped></style>
