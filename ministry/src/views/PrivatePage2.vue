<template>
  <div class="container pt-lg-md">
    <div class="row justify-content-center">
      <div class="col-lg-5">
        <card
          type="secondary"
          shadow
          header-classes="bg-white pb-5"
          body-classes="px-lg-3 py-lg-3"
          class="border-0"
        >
          <div>
            <div class="alert alert-success" role="alert">
              <h4 class="alert-heading">
                H Άρση Αναστολής Υποβλήθηκε Επιτυχώς
              </h4>
            </div>
            <div>
              <br>
              <br>
              <button
                class="btn btn-primary"
                name="submit"
                type="submit"
                @click="arxikh"
              >
                Επιστροφη στo Προφίλ
              </button>
            </div>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "PrivatePage",
  methods: {
    arxikh: function () {
      this.$router.push("/profile");
    },
  },
};
</script>