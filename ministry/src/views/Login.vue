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
            <template>

              <div class="text-center mb-4">
                Σύνδεση Χρήστη
              </div>
            </template>
            <template>
              <form role="form" @submit.prevent="handleLogin">

                <!-- Username form -->
                <div class="form-group">
                  <label for="username">Όνομα Χρήστη</label>
                  <input required
                         v-model="user.username"
                         type="text"
                         class="form-control"
                         placeholder="'Ονομα"
                  />
                </div>

                <div class="form-group">
                  <label for="password">Κωδικός</label>
                  <input required
                         v-model="user.password"
                         type="password"
                         class="form-control"
                         placeholder="κωδικός"
                  />
                </div>

                <br>

                <!-- Login Button -->
                <div class="form-group">
                  <button class="btn btn-primary btn-block" :disabled="loading">
                    <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                    <span>Login</span>
                  </button>
                </div>



                <div class="form-group">
                  <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
                </div>

              </form>
            </template>
          </card>
          <div class="row mt-3">
            <div class="col-12 text-right">
              <span class="text-light">
                <small>Δεν έχετε λογαριασμό; </small>
              </span>
              <a href="#/register">
                <small>Εγγραφή</small>
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
  name: 'Login',
  data() {
    return {
      user: new User('', '', '', ''),
      loading: false,
      message: '',
      items: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'User',
          href: '#/user'
        },
        {
          text: 'Login',
          active: true
        }
      ]
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      console.log("IN handle login!")
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false;
          return;
        }
        if (this.user.username && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
              () => {
                this.$router.push('/profile');
              },
              error => {
                this.loading = false;
                // this.message =
                //     (error.response && error.response.data) ||
                //     error.message ||
                //     error.toString();
                this.message = error.response.data.error;
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
