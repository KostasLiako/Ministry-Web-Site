<template>
  <div class="container pt-lg-md">

    <div class="row justify-content-center">
      <div class="col-lg-7">
        <b-breadcrumb :items="items"></b-breadcrumb>
        <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-6 py-lg-6"
            class="border-0"
        >
          <div>
            <br />
            <h3 class="head">
              ΔΗΛΩΣΗ ΕΞ ΑΠΟΣΤΑΣΕΩΣ ΕΡΓΑΣΙΑ ΕΡΓΑΖΟΜΕΝΟΥ
            </h3>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <table class="center">
                <tr>
                  <td>
                    <b-form-group
                        id="input-group-2"
                        label="Όνομα Εργαζομένου:"
                        label-for="input-2"
                    >
                      <b-form-input
                          class="input"
                          type="text"
                          id="input-2"
                          v-model="form.name"
                          placeholder="Όνομα"
                          required
                      ></b-form-input>
                    </b-form-group>
                  </td>

                  <td>
                    <b-form-group
                        id="input-group-2"
                        label="Επίθετο Εργαζομένου:"
                        label-for="input-2"
                    >
                      <b-form-input
                          class="input"
                          type="text"
                          id="input-2"
                          v-model="form.submane"
                          placeholder="Επίθετο"
                          required
                      ></b-form-input>
                    </b-form-group>
                  </td>
                </tr>

                <tr>
                  <td
                  ><b-form-group
                      id="input-group-2"
                      label="A.Φ.Μ Εργοδότη:"
                      label-for="input-2"
                  >
                    <b-form-input
                        class="input"
                        type="text"
                        id="input-2"
                        v-model="form.afm1"
                        placeholder="Α.Φ.Μ"
                        required
                    ></b-form-input>
                  </b-form-group>
                  </td>

                  <td>
                    <b-form-group
                        id="input-group-2"
                        label="A.Φ.Μ Εργαζομένου:"
                        label-for="input-2"
                    >
                      <b-form-input
                          class="input"
                          type="text"
                          id="input-2"
                          v-model="form.afm2"
                          placeholder="Α.Φ.Μ"
                          required
                      ></b-form-input>
                    </b-form-group>
                  </td>
                </tr>

                <tr>
                  <td>
                    <b-form-group
                        id="input-group-2"
                        label="Έναρξη Eξ'αποστάσεως εργασίας:"
                        label-for="input-2"
                    >
                      <b-form-input
                          type="date"
                          id="input-2"
                          v-model="form.dateStart"
                          required
                      ></b-form-input>
                    </b-form-group>
                  </td>
                  <td>
                    <b-form-group
                        id="input-group-2"
                        label="Λήξη εξ'αποστάσεως εργασίας:"
                        label-for="input-2"
                    >
                      <b-form-input
                          type="date"
                          id="input-2"
                          v-model="form.dateEnd"
                          required
                      ></b-form-input>
                    </b-form-group>
                  </td>
                </tr>

                <tr>
                  <td>
                    <b-button type="submit" variant="primary"
                    >Υποβολή Δήλωσης</b-button
                    >
                  </td>
                  <td>
                    <b-button type="reset" variant="danger"
                    >Καθαρισμός Πεδίων</b-button
                    >
                  </td>
                </tr>
              </table>
            </b-form>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {
        dateStart: "",
        dateEnd: "",
        email: "",
        name: "",
        submane: "",
        afm1: "",
        afm2: "",
      },
      show: true,
      items: [
        {
          text: 'Αρχική',
          href: '/'
        },
        {
          text: 'Είμαι Εργοδότης',
          href: '/#/employerServices',

        },
        {
          text: 'Δήλωση εξ αποστάσεων εργασία',
          active: true
        }
      ]

    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(
          "ΕΙΣΑΙ ΣΙΓΟΥΡΟΣ ΓΙΑ ΤΗΝ ΟΡΘΟΤΗΤΑ ΤΩΝ ΣΤΟΙΧΕΙΩΝ;",
          this.$router.push("/private-page")
      );
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.submane = "";
      this.form.afm1 = "";
      this.form.afm2 = "";
      this.form.dateStart = "";
      this.form.dateEnd = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style>
.input {
  width: 100%;
  display: block;
}
.afmInput {
  width: 200%;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

.head {
  text-align: center;
}
</style>