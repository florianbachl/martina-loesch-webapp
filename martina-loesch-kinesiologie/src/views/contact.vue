<template>
  <div id="contact">
    <section
      class="bg-grey vh-100 d-flex flex-row justify-content-between align-items-center"
    >
      <div class="container col-12">
        <div class="row">
          <div class="col">
            <h1 class="h1">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </h1>
            <p class="lead-4 my-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </p>
          </div>
          <div class="col">
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form-group mt-3">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form-group mt-3">
                <label for="exampleFormControlSelect1">Example select</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <div class="form-group mt-3">
                <label for="exampleFormControlTextarea1"
                  >Example textarea</label
                >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div class="form-check mt-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Default checkbox
                </label>
              </div>
              <button class="btn btn-primary mt-5" type="button">
                Jetzt Kontaktieren
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "contact-comp",
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
