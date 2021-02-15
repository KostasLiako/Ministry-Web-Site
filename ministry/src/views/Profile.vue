<template>
  <div class="profile-page">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <br>
    <br>
    <section class="section section-skew">

      <div class="container pt-lg-md">
        <card
            type="secondary"
            shadow
            class="card-profile mt--100 border-0"
            no-body
        >
          <div class="px-5">
            <div class="row justify-content-center">
              <div class="col-lg-10 order-lg-2">
                <div class="card-profile-image">
                  <a href="#/profile">
                    <img
                        v-lazy="'img/theme/profile2.png'"
                        class="rounded-circle"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </card>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>

        <div class="px-5">
          <div class="row justify-content-center">

            <div class="col-lg-11 mt-5 mt-lg-0">
              <!-- Menu -->

              <tabs fill class="flex-column flex-md-row">
                <card shadow>
                  <tab-pane title="Στοιχεία Χρήστη">
                    <b-form  class="form text-center" @submit.prevent="updateProfile">
                      <table class="tableForm">
                        <div class="mt-0 py-0  text-center">

                          <tr>
                            <td><b-form-group id="input-group-2" label="Όνομα Χρήστη:" label-for="input-2">
                              <b-form-input
                                  class="input"
                                  type="text"
                                  id="input-2"
                                  :value="currentUser.username"
                                  disabled
                              ></b-form-input>
                            </b-form-group>
                            </td>
                          </tr>


                          <tr>
                            <td> <b-form-group  id="input-group-2" label="Όνομα:" label-for="input-2">
                              <b-form-input
                                  class="input"
                                  type="text"
                                  id="input-2"
                                  :value="currentUser.firstName"
                                  disabled
                              ></b-form-input>
                            </b-form-group>
                            </td>

                            <td> <b-form-group id="input-group-2" label="Επίθετο:" label-for="input-2">
                              <b-form-input
                                  class="input"
                                  type="text"
                                  id="input-2"
                                  :value="currentUser.lastName"
                                  disabled
                              ></b-form-input>
                            </b-form-group>

                            </td>
                          </tr>
                          <tr>
                            <td><b-form-group id="input-group-2" label="Email:" label-for="input-2">
                              <b-form-input
                                  class="input"
                                  type="email"
                                  id="input-2"
                                  v-model="currentUser.email"

                              ></b-form-input>
                            </b-form-group>
                            </td>
                          </tr>

                          <tr>
                            <td><b-form-group id="input-group-2" label="A.Φ.Μ:" label-for="input-2">
                              <b-form-input
                                  class="input"
                                  type="text"
                                  id="input-2"
                                  :value="currentUser.afm"
                                  disabled
                              ></b-form-input>
                            </b-form-group>
                            </td>
                          </tr>

                          <tr>
                            <td><b-form-group id="input-group-2" label="Αριθμός Επικοινωνίας:" label-for="input-2">
                              <b-form-input
                                  class="input"
                                  type="number"
                                  id="input-2"
                                  v-model="currentUser.phoneNumber"
                              ></b-form-input>
                            </b-form-group>
                            </td>
                          </tr>
                        </div>
                      </table>

                      <b-button type="primary" size="lg" variant="primary" class="mr-6" :disabled="loading">
                        <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                        <span>ΕΝΗΜΕΡΩΣΗ ΠΡΟΦΙΛ</span>
                      </b-button>

                      <br>

                      <div
                          size="lg"
                          v-if="message"
                          class="alert"
                          :class="successful ? 'alert-success' : 'alert-danger'"
                      >{{message}}</div>

                    </b-form>

                  </tab-pane>

                  <tab-pane v-if="this.currentUser.employmentStatus=='employee'" title="Προσωπικές Δηλώσεις">
                    <div class="mt-5 py-0  text-center">
                      <section class="section">
                        <div class="container">
                          <div class="row justify-content-center">
                            <div class="col-lg-12">
                              <div class="row row-grid">
                                <div class="col-lg-4">
                                  <card class="border-0"  shadow >

                                    <h6 class="text-primary text-uppercase">
                                      ΔΗΛΩΣΗ ΑΔΕΙΑΣ ΕΙΔΙΚΟΥ ΣΚΟΠΟΥ
                                    </h6>
                                    <h6 class="text-danger text-uppercase">
                                      ΑΡ.ΔΗΛΩΣΗΣ #0075287
                                    </h6>

                                    <base-button
                                        tag="a"
                                        href="#/special-leave-ready"
                                        type="primary"
                                        class="mt-4"
                                    >
                                      ΠΡΟΒΟΛΗ ΔΗΛΩΣΗΣ
                                    </base-button>
                                  </card>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </tab-pane>

                  <tab-pane :title=paneName>
                    <div class="mt-0 py-5  text-center">
                      <section class="section">
                        <div class="container">
                          <div class="row justify-content-center">
                            <div class="col-lg-12">
                              <div class="row row-grid">
                                <div class="col-lg-4">
                                  <card class="border-0"  shadow >

                                    <h6 class="text-primary text-uppercase">
                                      ΔΗΛΩΣΗ ΑΝΑΣΤΟΛΗΣ ΕΡΓΑΣΙΑΣ
                                    </h6>
                                    <h6 class="text-danger text-uppercase">
                                      ΑΡ.ΔΗΛΩΣΗΣ #00087476
                                    </h6>

                                    <base-button
                                        tag="a"
                                        href="#/suspesion-ready"
                                        type="primary"
                                        class="mt-4"
                                    >
                                      ΠΡΟΒΟΛΗ ΔΗΛΩΣΗΣ
                                    </base-button>
                                    <base-button
                                        tag="a"
                                        href="#/private-page2"
                                        v-if="currentUser.employmentStatus=='employer'"
                                        type="danger"
                                        class="mt-2"
                                        @click="Alert"
                                    >
                                      ΑΡΣΗ ΑΝΑΣΤΟΛΗΣ
                                    </base-button>

                                  </card>
                                </div>
                                <div class="col-lg-4">
                                  <card class="border-0"  shadow >

                                    <h6 class="text-primary text-uppercase">
                                      ΔΗΛΩΣΗ ΕΞ ΑΠΟΣΤΑΣΕΩΣ ΕΡΓΑΣΙΑΣ
                                    </h6>
                                    <h6 class="text-danger text-uppercase">
                                      ΑΡ.ΔΗΛΩΣΗΣ #00097069
                                    </h6>

                                    <base-button
                                        tag="a"
                                        href="#/remote-work-ready"
                                        type="primary"
                                        class="mt-4"
                                    >
                                      ΠΡΟΒΟΛΗ ΔΗΛΩΣΗΣ
                                    </base-button>


                                  </card>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </tab-pane>

                </card>
              </tabs>
            </div>
          </div>
        </div>


      </div>
    </section>
  </div>
</template>


<script>
import Tabs from "@/components/Tabs/Tabs";
import TabPane from "@/components/Tabs/TabPane";

export default {
  name: 'Profile',
  components: {
    Tabs,
    TabPane
  },
  data() {
    return {
      items: [
        {
          text: 'Αρχική',
          href: '/'
        },
        {
          text: 'Προφιλ',
          active: true
        }
      ],
      loading: false,
      message: '',
      paneName: ''
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  beforeMount() {
    this.setPaneName();
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  },
  methods: {
    setPaneName() {
      if (this.currentUser.employmentStatus=="employee") {
        this.paneName = 'Δηλώσεις Εργοδότη';
      }
      else if (this.currentUser.employmentStatus=="employer") {
        this.paneName = 'Δηλώσεις για εργαζομένους';
      }
    },
    updateProfile() {
      this.loading = true;
      this.message = '';
      //console.log("Previous username and email!!")
      // console.log(localStorage.getItem('user'))
      // console.log("---------------------------------\n")
      this.$validator.validate().then(isValid => {
        if (isValid) {
          this.$store.dispatch('auth/update', this.currentUser).then(
              data => {
                this.message = data.message;
                this.successful = true;
                this.loading = false;
                var item = JSON.parse(localStorage.getItem('user'));
                item['username'] = this.currentUser.username;
                item['email'] = this.currentUser.email;
                item['phoneNumber'] = this.currentUser.phoneNumber;
                localStorage.setItem('user', JSON.stringify(item));
              },
              error => {
                this.loading = false;
                this.message =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
                this.successful = false;
              }
          );
        }
      });
    },
    Alert() {
      alert("EIΣΤΕ ΣΙΓΟΥΡΟΣ ΟΤΙ ΘΕΛΕΤΕ ΝΑ ΚΑΝΕΤΕ ΑΡΣΗ ΤΗΣ ΑΝΑΣΤΟΛΗΣ;");
      this.$router.push('/private-page2');
    }
  }
};
</script>


<style>
.line{
  color: black;
}
</style>
