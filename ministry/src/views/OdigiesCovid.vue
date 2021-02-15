<template>

  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <br>
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
                  <h6 class="text-primary ">Γενικές πληροφορίες COVID</h6>

                  <base-button tag="a" href="#/GenikesPlhroforiesCovid" type="primary" class="mt-4">
                    Περισσοτερα
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="fa fa-folder" type="primary" rounded class="mb-4" aria-hidden="true">
                  </icon>
                  <h6 class="text-primary">Οδηγίες για τον εργοδότη</h6>

                  <base-button tag="a" href="#/OdigiesErgodoti" type="primary" class="mt-4">
                    Περισσοτερα
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="fa fa-folder" type="primary" rounded class="mb-4">
                  </icon>
                  <h6 class="text-primary">Επιλογές εργαζομένων στην εποχή της πανδημίας</h6>

                  <base-button tag="a" href="#/OdigiesErgazomenou" type="primary" class="mt-4">
                    Περισσοτερα
                  </base-button>
                </card>
              </div>

            </div>

            <div class="row row-grid">
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="fa fa-folder" type="primary" rounded class="mb-4">
                  </icon>
                  <h6 class="text-primary">Ειδικές οδηγίες Ε.Ο.Δ.Υ.</h6>

                  <base-button tag="a" href="#/OdigiesEodi" type="primary" class="mt-4">
                    Περισσοτερα
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
          text: 'Οδηγίες Covid',
          active: true
        }
      ],
    }
  },
}
</script>
        

