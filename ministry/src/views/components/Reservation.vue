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
         <p style="color:red"> *Λόγο COVID το ωράριο έχει διαμορφωθεί.Μπορείτε να το δείτε <A target="_blank" href="/wrario.pdf"> εδώ </A> </p>

          <div class="Reservation">
            <h3 class="head">Κλείσε Ραντεβού</h3>
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
                      id="input-group-3"
                      label="Λόγος Ραντεβού:"
                      label-for="input-3"
                    >
                      <b-form-select
                        id="input-3"
                        v-model="form.reason"
                        :options="choices"
                        placeholder
                        required
                      ></b-form-select>
                    </b-form-group>
                  </td>
                </tr>

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
                        v-model="form.subname"
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
                      label="Τηλέφωνο Επικοινωνίας:"
                      label-for="input-2"
                    >
                      <b-form-input
                        class="input"
                        type="text"
                        id="input-2"
                        v-model="form.phone"
                        placeholder="Τηλέφωνο"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </td>
                </tr>

                <tr>
                  <td>
                    <b-form-group
                      id="input-group-2"
                      label="Ημερομηνία Ραντεβού:"
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
                </tr>

                <tr>
                  <td>
                    <b-form-group
                      id="input-group-2"
                      label="Ώρα Ραντεβού:"
                      label-for="input-2"
                    >
                      <b-form-input
                        type="time"
                        id="input-2"
                        v-model="form.time"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </td>
                </tr>

                <tr>
                  <td>
                    <b-button type="submit" variant="primary"
                      >Κλείσμο Ραντεβού</b-button
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
        reason: null,
        phone: "",
        dateStart: "",
        name: "",
        subname: "",
        time: "",
      },
      show: true,
      items: [
        {
            text: 'Αρχική',
            href: '/'
          },
          {
            text: 'Ραντεβόυ',
             active: true          
          }
      ],
      choices: [
        { text: "Επιλογή", value: null },
        "Λόγος 1",
        "Λόγος 2",
        "Λόγος 3",
        "Λόγος 4",
      ],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert("ΕΙΣΑΙ ΣΙΓΟΥΡΟΣ ΟΤΙ ΘΕΛΕΤΕ ΝΑ ΚΛΕΙΣΕΤΕ ΡΑΝΤΕΒΟΥ;");
      this.$router.push({
        name: "ReservationVal",
        params: { data: this.form },
      });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.name = "";
      this.form.subname = "";
      this.form.dateStart = "";
      this.form.time = "";
      this.reason = null;
      this.phone = "";
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
.center {
  margin-left: auto;
  margin-right: auto;
}

.head {
  text-align: center;
}
</style>
