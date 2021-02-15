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
          <div style="text-align:center">
            <h3 class="head"> ΑΔΕΙΑ ΕΙΔΙΚΟΥ ΣΚΟΠΟΥ </h3>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form" >
              <table class="tableForm">

                <tr>
                  <td>
                    <b-form-group id="input-group-3" label="Λόγος Αδείας:" label-for="input-3">
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
                  <td> <b-form-group  id="input-group-2" label="Όνομα:" label-for="input-2">
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

                  <td> <b-form-group id="input-group-2" label="Επίθετο:" label-for="input-2">
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
                  <td><b-form-group id="input-group-2" label="A.Φ.Μ" label-for="input-2">
                    <b-form-input
                        class="input"
                        type="text"
                        id="input-2"
                        v-model="form.afm"
                        placeholder="Α.Φ.Μ"
                        required
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
                          placeholder
                          required
                      ></b-form-select>
                    </b-form-group>
                  </td>
                </tr>

                <tr>
                  <td>
                    <b-form-group id="input-group-2" label="Έναρξη Αδείας:" label-for="input-2">
                      <b-form-input
                          type="date"
                          id="input-2"
                          v-model="form.dateStart"
                          required
                      ></b-form-input>
                    </b-form-group>
                  </td>

                  <td>
                    <b-form-group id="input-group-2" label="Λήξη Αδείας:" label-for="input-2">
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

                    <b-button  type="submit" variant="primary">Υποβολή Δήλωσης</b-button>

                  <td><b-button type="reset" variant="danger">Καθαρισμός Πεδίων</b-button> </td>

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
        phone: '',
        dateStart: '',
        dateEnd: '',
        name: '',
        subname: '',
        time: '',
        afm: '',
        childNum: null,
      },
      show: true,
      items: [
        {
          text: 'Αρχική',
          href: '/'
        },
        {
          text: 'Είμαι Εργαζόμενος',
          href: '/#/employ',

        },
        {
          text: 'Άδεια ειδικού σκοπού',
          active: true
        }
      ],
      choices: [{ text: 'Επιλογή', value: null }, 'Γονική', 'Λόγος 2', 'Λόγος 3', 'Λόγος 4'],
      childs: [{text: 'Επιλογή', value: null},'1','2','3','Περισσότερα'],
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert('ΕΙΣΤΕ ΣΙΓΟΥΡΟΣ ΟΤΙ ΘΕΛΕΤΕ ΝΑ ΥΠΟΒΑΛΕΤΕ ΤΗΝ ΑΙΤΗΣΗ;')
      this.$router.push("/private-page")

    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.name = ''
      this.form.subname= ''
      this.form.dateStart=''
      this.form.time=''
      this.reason=null
      this.phone=''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    sendData() {
      this.$router.push({name:"RantevouValidation", params: {data:this.form}})

    },
  }
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