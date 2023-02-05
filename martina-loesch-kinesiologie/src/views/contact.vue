<template>
  <div id="contact">
    <section
      class="bg-grey vh-100 d-flex flex-row justify-content-between align-items-center"
    >
      <div class="container col-12">
        <div class="d-md-flex flex-md-row">
          <div class="col">
            <h1 class="h1">Kontakt</h1>
            <p class="lead-4 my-4">Erzähl mir etwas mehr über deine Anfrage</p>
          </div>
          <div class="col">
            <form
              accept-charset="UTF-8"
              :action="
                botcheck ? '' : 'https://www.formbackend.com/f/a90cca0abc26de31'
              "
              method="POST"
            >
              <div class="form-group">
                <label for="email">Email Adresse</label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="email"
                  v-model="email"
                  required
                  placeholder="martina@kinesiologie.com"
                />
              </div>
              <div class="form-group">
                <label for="phone">Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  class="form-control"
                  id="phone"
                  v-model="phone"
                  required
                  placeholder="0660 5773434"
                />
              </div>
              <div class="form-group mt-3">
                <label for="name">Name</label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  v-model="name"
                  required
                  id="name"
                  placeholder="Martina"
                />
              </div>
              <div class="form-group mt-3">
                <label for="selecttheme">Wähle ein Thema aus</label>
                <select
                  class="form-control"
                  name="thema"
                  id="selecttheme"
                  v-model="chosenoption"
                >
                  <option v-for="op in options" :key="op" :value="op">
                    {{ op }}
                  </option>
                </select>
              </div>

              <div class="form-group mt-3">
                <label for="text">Deine Nachricht</label>
                <textarea
                  class="form-control"
                  id="text"
                  name="nachricht"
                  rows="3"
                  required
                  v-model="text"
                ></textarea>
              </div>
              <div class="form-check invisible">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="botcheck"
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Default checkbox
                </label>
              </div>
              <button class="btn btn-primary mt-5" type="submit">
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
    return {
      text: "",
      botcheck: false,
      email: "",
      name: "",
      phone: "",
      chosenoption: null,
      options: [
        "Ich möchte einen Termin buchen",
        "Ich habe Fragen zu den Behandlungen",
        "Ich habe Fragen zu den Tarifen",
        "Andere ...",
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped></style>
