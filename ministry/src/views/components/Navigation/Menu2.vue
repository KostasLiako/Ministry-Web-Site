<template>
  <ul class="navbar-nav ml-lg-auto">
    <li class="nav-item">
      <a style="color:#0F52BA" class="nav-link" href="#/">Αρχική
        <span class="sr-only">(current)</span>
      </a>
    </li>

    <li class="nav-item">
      <a style="color:#0F52BA" class="nav-link" href="#/reservation">Ραντεβού</a>
    </li>

    <li class="nav-item">
      <a style="color:#0F52BA" class="nav-link" href="#/Epikoinwnia">Επικοινωνία</a>
    </li>

    <li class="nav-item">
      <a style="color:#0F52BA" class="nav-link" v-if="currentUser" href="#/profile">Προφίλ</a>
    </li>

    <li class="nav-item">
      <a style="color:#0F52BA" class="nav-link" v-if="!currentUser" href="#/login">Σύνδεση</a>
    </li>

    <li class="nav-item">
      <a style="color:#0F52BA" class="nav-link" v-if="currentUser" @click.prevent="logOut">Αποσύνδεση</a>
    </li>

    <li class="nav-item">
      <a style="color:#0F52BA" class="nav-link" v-if="!currentUser" href="#/register">Εγγραφή</a>
    </li>

  </ul>
</template>
<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
    }
  }
};
</script>

