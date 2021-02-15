<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <br>
    <section class="section section-lg pt-lg-0 mt--0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon
                      name="fa fa-folder"
                      type="primary"
                      rounded
                      class="mb-4"
                      aria-hidden="true"
                  >
                  </icon>
                  <h6 class="text-primary text-uppercase">
                    ΔΗΛΩΣΗ ΑΔΕΙΑΣ ΕΙΔΙΚΟΥ ΣΚΟΠΟΥ
                  </h6>

                  <base-button
                      tag="a"
                      href="#/employ/special-leave"
                      type="primary"
                      class="mt-4"
                  >
                    ΔΗΛΩΣΗ
                  </base-button>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    data() {
    return {
      items: [
        {
          text: 'Αρχική',
          href: '/'
        },
        {
          text: 'Είμαι Εργαζόμενος',
          active: true
        }
      ],
    }
  },
}
</script>