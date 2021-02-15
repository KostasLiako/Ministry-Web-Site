<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <card type="secondary" shadow
                header-classes="bg-white pb-5"
                body-classes="px-lg-5 py-lg-5"
                class="border-0">

            <template v-if="!successful">
              <div class="text-center mb-4">Εγγραφή</div>
            </template>

            <template >
              <form role="form" v-if="!successful" @submit.prevent="handleRegister">
                <div class="form-group">
                  <label for="employmentStatus" >Επιλογή ιδιότητας</label>
                  <select v-model="user.employmentStatus" id="inputState" class="form-control" >
                    <option value="employer">Εργοδότης</option>
                    <option value="employee">Εργαζόμενος</option>
                  </select>
                  <!--                  <span>Selected: {{ user.employmentStatus }}</span>-->
                </div>
                <table>
                  <tr>
                    <td>
                      <div class="form-group">
                        <label for="username">Όνομα Χρήστη</label>
                        <input
                            v-model="user.username"
                            v-validate="'required|min:3|max:20'"
                            type="text"
                            class="form-control"
                            name="username"
                            placeholder="'Ονομα"
                            required
                        />
                        <div
                            v-if="submitted && errors.has('username')"
                            class="alert-danger"
                        >{{errors.first('username')}}</div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="form-group">
                        <label for="firstName">Όνομα</label>
                        <input
                            v-model="user.firstName"
                            v-validate="'required|min:3|max:20'"
                            type="text"
                            class="form-control"
                            name="firstName"
                            placeholder="Όνομα"
                            required
                        />
                        <div
                            v-if="submitted && errors.has('username')"
                            class="alert-danger"
                        >{{errors.first('username')}}</div>
                      </div>
                    </td>
                    <td>

                      <div class="form-group">
                        <label for="lastName">Επώνυμο</label>
                        <input
                            v-model="user.lastName"
                            v-validate="'required|min:3|max:20'"
                            type="text"
                            class="form-control"
                            name="lastName"
                            placeholder="Επώνυμο"
                            required
                        />
                        <div
                            v-if="submitted && errors.has('username')"
                            class="alert-danger"
                        >{{errors.first('username')}}</div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="form-group">
                        <label for="phoneNumber">Τηλέφωνο</label>
                        <input
                            v-model="user.phoneNumber"
                            v-validate="'required|min:3|max:20'"
                            type="number"
                            class="form-control"
                            name="phoneNumber"
                            placeholder="Τηλέφωνο"
                            required
                        />
                        <div
                            v-if="submitted && errors.has('username')"
                            class="alert-danger"
                        >{{errors.first('username')}}</div>
                      </div>
                    </td>
                    <td>

                      <div class="form-group">
                        <label for="afm">ΑΦΜ</label>
                        <input
                            v-model="user.afm"
                            v-validate="'required|min:3|max:20'"
                            type="number"
                            class="form-control"
                            name="afm"
                            placeholder="ΑΦΜ"
                            required
                        />
                        <div
                            v-if="submitted && errors.has('username')"
                            class="alert-danger"
                        >{{errors.first('username')}}</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>

                      <div class="form-group">
                        <label for="email">Email</label>
                        <input
                            required
                            v-model="user.email"
                            v-validate="'required|email|max:50'"
                            type="email"
                            class="form-control"
                            placeholder="email"
                            name="email"
                        />
                        <div
                            v-if="submitted && errors.has('email')"
                            class="alert-danger"
                        >{{errors.first('email')}}</div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="form-group">
                        <label for="password">Κωδικός</label>
                        <input
                            required
                            v-model="user.password"
                            v-validate="'required|min:6|max:40'"
                            type="password"
                            class="form-control"
                            name="password"
                            placeholder="password"
                        />

                        <div class="text-muted font-italic">
                          <small>Ασφάλεια κωδικού:
                            <span class="text-success font-weight-700">Υψηλή</span>
                          </small>
                        </div>

                        <div
                            v-if="submitted && errors.has('password')"
                            class="alert-danger"
                        >{{errors.first('password')}}</div>
                      </div>
                    </td>
                  </tr>
                </table>

                <base-checkbox >
                  <span>Αποδέχομαι τους
                    <a href="#/register">Όρους Χρήσης</a>
                  </span>
                </base-checkbox>

                <br>

                <div class="form-group">
                  <button class="btn btn-primary btn-block">Εγγραφή</button>
                </div>
              </form>

              <div
                  v-if="message"
                  class="alert"
                  :class="successful ? 'alert-success' : 'alert-danger'"
              >{{message}}</div>
            </template>
          </card>
          <div class="row mt-3">
            <div class="col-12 text-right">
                <span class="text-light">
                  <small>Έχετε ήδη λογαριασμό; </small>
                </span>
              <a href="#/login">
                <small>Είσοδος</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import User from '../models/user';

export default {
  name: 'Register',
  data() {
    return {
      user: new User('', '', '', '', '', '', '', ''),
      submitted: false,
      successful: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;
      //console.log("In handle register")
      this.$validator.validate().then(isValid => {
        if (isValid) {
          this.$store.dispatch('auth/register', this.user).then(
              data => {
                this.message = data.message;
                this.successful = true;
                //this.$router.push('/login');
              },
              error => {
                // console.log(error.response);
                // console.log(error.response.data.message);
                // console.log(error.message);

                this.message = error.response.data.message;
                // (error.response && error.response.data) ||
                // error.message ||
                // error.toString();
                this.successful = false;
              }
          );
        }
      });
    }
  }
};
</script>

<style>
</style>
