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
            <h3 class="head"> ΑΔΕΙΑ ΕΙΔΙΚΟΥ ΣΚΟΠΟΥ </h3>
            <b-form class="form" >
              <table class="tableForm">

                <tr>
                  <td>
                    <b-form-group id="input-group-3" label="Λόγος Αδείας:" label-for="input-3">
                      <b-form-select
                          id="input-3"
                          v-model="form.reason"
                          :options="choices"

                          disabled
                      ></b-form-select>
                    </b-form-group>
                  </td>
                </tr>

                <tr>
                  <td> <b-form-group  id="input-group-2" label="Όνομα:" label-for="input-2">
                    <b-form-input
                        class="input"
                        type="text"
                        id="input-2"
                        v-model="form.name"
                        placeholder="Όνομα"
                        disabled
                    ></b-form-input>
                  </b-form-group>
                  </td>

                  <td> <b-form-group id="input-group-2" label="Επίθετο:" label-for="input-2">
                    <b-form-input

                        class="input"
                        type="text"
                        id="input-2"
                        v-model="form.subname"
                        placeholder="Επίθετο"
                        disabled
                    ></b-form-input>
                  </b-form-group>

                  </td>
                </tr>

                <tr>
                  <td><b-form-group id="input-group-2" label="A.Φ.Μ" label-for="input-2">
                    <b-form-input
                        class="input"
                        type="text"
                        id="input-2"
                        v-model="form.afm"
                        placeholder="Α.Φ.Μ"
                        disabled
                    ></b-form-input>
                  </b-form-group>
                  </td>
                </tr>

                <tr>
                  <td>
                    <b-form-group id="input-group-3" label="Αριθμός Ανήλικων Τέκνων:" label-for="input-3">
                      <b-form-select
                          id="input-3"
                          v-model="form.childNum"
                          :options="childs"
                          disabled
                      ></b-form-select>
                    </b-form-group>
                  </td>
                </tr>

                <tr>
                  <td>
                    <b-form-group id="input-group-2" label="Έναρξη Αδείας:" label-for="input-2">
                      <b-form-input
                          type="text"
                          id="input-2"
                          v-model="form.dateStart"
                          disabled
                      ></b-form-input>
                    </b-form-group>
                  </td>

                  <td>
                    <b-form-group id="input-group-2" label="Λήξη Αδείας:" label-for="input-2">
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
        afm: '1267673832',
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