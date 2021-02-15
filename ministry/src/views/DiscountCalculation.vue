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
          <div class="Discount">
            <h2 class="head">ΥΠΟΛΟΓΙΣΜΟΣ ΕΚΠΤΩΣΗΣ / ΑΠΑΛΑΓΗΣ ΕΙΣΦΟΡΩΝ</h2>
            <b-form
                @submit="onSubmit"
                @reset="onReset"
                v-if="show"
                class="form"
            >
              <table class="center">
                <tr>
                  <td>
                    <b-form-group
                        id="input-group-2"
                        label="Όνομα:"
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
                        label="Επίθετο:"
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
                  <td>
                    <b-form-group
                        id="input-group-2"
                        label="A.Φ.Μ:"
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
                </tr>

                <tr>
                  <td>
                    <b-form-group
                        id="input-group-2"
                        label="Έναρξη Αναστολής:"
                        label-for="input-2"
                    >
                      <b-form-input
                          class="input"
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
                        label="Λήξη Αναστολής:"
                        label-for="input-2"
                    >
                      <b-form-input
                          class="input"
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
                    <b-form-group
                        id="input-group-2"
                        label="ΠΟΣΟ ΑΠΑΛΛΑΓΗΣ / EΚΠΤΩΣΗΣ: "
                        label-for="input-2"
                    >
                      <p><b>{{ form.discount }} €</b></p>
                    </b-form-group>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b-button type="discount" variant="primary"
                    >Υπολογισμος</b-button
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
        discount: '0',
        dateStart: '',
        dateEnd: '',
        email: '',
        name: '',
        submane: '',
        afm1: '',
        afm2: '',
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
          text: 'Υπολογισμός',
          active: true
        }
      ]
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.form.discount = 100;
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.submane= ''
      this.form.afm1=''
      this.form.afm2=''
      this.form.dateStart=''
      this.form.dateEnd=''
      this.form.discount=''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  }
}
</script>


<style>
.center {
  margin-left: auto;
  margin-right: auto;
}

.head {
  text-align: center;
}
</style>