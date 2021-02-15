<template>
  <div class="container pt-lg-md">
    <div class="row justify-content-center">
      <div class="col-lg-10">
    <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-6 py-lg-6"
            class="border-0"
        >
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Το Ραντεβού Επιβεβαιώθηκε Επιτυχώς</h4>
      <p>Στοιχεία Ραντεβου</p>
      <hr>
      <p class="mb-0"></p>
      <p>ONOMA: {{form.name}}</p>
      <p>EΠΩΝΥΜΟ: {{form.subname}}</p>
      <p>ΗΜΕΡΟΜΗΝΙΑ ΡΑΝΤΕΒΟΥ: {{form.dateStart}}</p>
      <p>ΩΡΑ ΡΑΝΤΕΒΟΥ: {{form.time}}</p>
    </div>
    <div>
      <button  class="btn btn-primary " name="submit" type="submit" @click="arxikh">
        Επιστροφη στην Αρχικη
      </button>
    </div>
    </card>
  </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "RantevouValidation",
  data() {
    return {
      form: {
        reason: null,
        phone: '',
        dateStart: '',
        name: '',
        subname: '',
        time: ''
      }
    }
  },
  methods: {
    arxikh: function() {
      this.$router.push('/');
    },
  },
  created() {
    this.form=this.$route.params.data
  }
}
</script>