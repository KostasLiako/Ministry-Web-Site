<template>
  <div class="container pt-lg-md">
    <div class="row justify-content-center">
      <div class="col-lg-7">
        <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-6 py-lg-6"
            class="border-0"
        >
          <div style="text-align:center">
            <h3 class="head"> ΔΗΛΩΣΗ ΕΞ ΑΠΟΣΤΑΣΕΩΣ ΕΡΓΑΣΙΑΣ</h3>
            <b-form>
              <table class="center">
                <tr>
                  <td>
                    <b-form-group
                        id="input-group-2"
                        label="Όνομα Eργαζομένου:"
                        label-for="input-2"
                    >
                      <b-form-input
                          class="input"
                          type="text"
                          id="input-2"
                          v-model="form.name"
                          placeholder="Όνομα Εργαζομένου"
                          disabled
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
                          disabled
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
                        disabled
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
                          disabled
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
                          type="text"
                          id="input-2"
                          v-model="form.dateStart"
                          disabled
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
                          type="text"
                          id="input-2"
                          v-model="form.dateEnd"
                          disabled
                      ></b-form-input>
                    </b-form-group>
                  </td>
                </tr>
              </table>
            </b-form>
            <button  class="btn btn-primary " name="submit" type="submit" @click="arxikh">
              Επιστροφη στο Προφίλ
            </button>
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
        phone: '',
        dateStart: '20/01/2021',
        dateEnd: '17/2/2021',
        name: 'Ιωάννης',
        subname: 'Γιαννακόπουλος',
        time: '',
        afm1: '1267673832',
        afm2: "9972398932",
        childNum: null,
      },
      show: true,
      items: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Rantevou',
          active: true
        }
      ],
      choices: [{ text: 'Γονική', value: null }, 'Γονική', 'Λόγος 2', 'Λόγος 3', 'Λόγος 4'],
      childs: [{text: '1', value: null},'1','2','3','Περισσότερα'],
    }
  },
  methods: {
    arxikh: function() {
      this.$router.push('/Profile');
    },
  },

}

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