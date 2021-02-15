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
                  <icon name="fa fa-folder" type="primary" rounded class="mb-4" aria-hidden="true">
                  </icon>
                  <h6 class="text-primary text-uppercase">ΔΗΛΩΣΗ ΑΝΑΣΤΟΛΗΣ ΣΥΜΒΑΣΕΩΣ ΕΡΓΑΣΙΑΣ ΕΡΓΑΖΟΜΕΝΩΝ</h6>

                  <base-button tag="a" href="#/employerServices/suspension" type="primary" class="mt-4">
                    ΔΗΛΩΣΗ
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="fa fa-folder" type="primary" rounded class="mb-4" aria-hidden="true">
                  </icon>
                  <h6 class="text-primary text-uppercase">ΥΠΟΛΟΓΙΣΜΟΣ ΕΚΠΤΩΣΗΣ / ΑΠΑΛΛΑΓΗΣ ΕΙΣΦΟΡΩΝ</h6>

                  <base-button tag="a" href="#/employerServices/discount" type="primary" class="mt-4">
                    ΥΠΟΛΟΓΙΣΜΟΣ
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="fa fa-folder" type="primary" rounded class="mb-4">
                  </icon>
                  <h6 class="text-primary text-uppercase">ΔΗΛΩΣΗ ΕΞ ΑΠΟΣΤΑΣΕΩΣ ΕΡΓΑΣΙΑΣ ΕΡΓΑΖΟΜΕΝΟΥ</h6>

                  <base-button tag="a" href="#/employerServices/remote" type="primary" class="mt-4">
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
          text: 'Είμαι Εργαδότης',
          active: true
        }
      ],
    }
  },
}
</script>        