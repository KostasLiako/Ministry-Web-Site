<template>
  <div>
    <section class="section section-lg pt-lg-0 mt--0">

      <section class="section section-lg section-shaped overflow-hidden my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container py-0 pb-lg">
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-5 mb-5 mb-lg-0">
              <h1 class="text-black font-weight-dark">Covid-19</h1>
              <p class="lead text-dark mt-4">Για πληροφορίες σχετικά με το νέο κορωνοϊό Covid-19 καλέστε
                στη γραμμή 24ης λειτουργίας.
              </p>
              <h2 class="text-black font-weight-dark"><i class="fa fa-phone" aria-hidden="true" style="color:lightgreen"></i>1135</h2>
              <a href="#/OdigiesCovid"
                 class="btn btn-danger mt-4">ΟΔΗΓΙΕΣ COVID-19</a>
            </div>
            <div class="col-lg-7 mb-lg-auto">
              <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
                <b-carousel id="carousel1"
                            controls
                            indicators>
                  <!-- Text slides with image -->
                  <b-carousel-slide href="#/OdigiesCovid" img-src="menoume_spiti.png"></b-carousel-slide>
                  <b-carousel-slide href="#/OdigiesCovid" img-src="CORONOIOS.jpg"></b-carousel-slide>
                  <b-carousel-slide href="#/OdigiesCovid" img-src="covid5.jpg"></b-carousel-slide>

                </b-carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4" >
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="fa fa-user-o" type="primary" rounded class="mb-4" aria-hidden="true">
                  </icon>
                  <h6 class="text-primary text-uppercase">EIMAI ΕΡΓΑΖΟΜΕΝΟΣ</h6>
                  <p class="description mt-3">ΥΠΗΡΕΣΙΕΣ ΓΙΑ ΕΡΓΑΖΟΜΕΝΟΥΣ</p>

                  <base-button tag="a" href="#/employ" type="primary" class="mt-4">
                    Περισσότερα
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="fa fa-user-o" type="success" rounded class="mb-4">
                  </icon>
                  <h6 class="text-success text-uppercase">ΕΙΜΑΙ ΕΡΓΟΔΟΤHΣ</h6>
                  <p class="description mt-3">ΥΠΗΡΕΣΙΕΣ ΓΙΑ ΕΡΓΟΔΟΤΕΣ </p>

                  <base-button tag="a" href="#/employerServices" type="success" class="mt-4">
                    Περισσότερα
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="fa fa-user-o" type="warning" rounded class="mb-4">
                  </icon>
                  <h6 class="text-warning text-uppercase">ΕΙΜΑΙ ΑΝΕΡΓΟΣ</h6>
                  <p class="description mt-3">ΥΠΗΡΕΣΙΕΣ ΓΙΑ ΑΝΕΡΓΟΥΣ</p>

                  <base-button tag="a" href="#" type="warning" class="mt-4">
                    Περισσότερα
                  </base-button>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <div class="row justify-content-center">

      <div class="col-lg-6 mt-5 mt-lg-0">
        <!-- Menu -->

        <tabs fill class="flex-column flex-md-row">
          <card shadow>
            <tab-pane title="Νέα - Ανακοινώσεις">
              <p style="font-size:1vw">30/Ιουλ/2020</p>
              <h6>Η ΧΡΗΣΗ ΜΑΣΚΑΣ ΕΙΝΑΙ ΥΠΟΧΡΕΩΤΙΚΗ ΓΙΑ ΤΟ ΚΟΙΝΟ ΠΟΥ ΠΡΟΣΕΡΧΕΤΑΙ ΓΙΑ ΕΞΥΠΗΡΕΤΗΣΗ ΣΕ ΧΩΡΟΥΣ ΓΡΑΦΕΙΩΝ ΔΗΜΟΣΙΩΝ ΥΠΗΡΕΣΙΩΝ</h6>
              <p style="font-size:1vw" class="lead text-muted">Στο πλαίσιο των έκτακτων μέτρων αντιμετώπισης του κινδύνου διασποράς του κορωνοϊου COVID-19 (Δ1α/ΓΠ.οικ.48002/28-7-2020 Κοινή Υπουργική Απόφαση, Β’ 3131)</p>
              <p><b><a href="#/">Αρχείο</a></b></p>

            </tab-pane>

            <tab-pane title="Δελτία Τύπου">
              <p style="font-size:1vw"> 06/Αυγ/2020</p>
              <h6>ΚΥΑ - ΔΙΑΔΙΚΑΣΙΑ ΓΙΑ ΤΗΝ ΨΗΦΙΑΚΗ ΣΥΝΔΕΣΗ ΠΑΙΔΙΩΝ ΜΕ ΥΠΟΨΗΦΙΟΥΣ ΑΝΑΔΟΧΟΥΣ Η ΘΕΤΟΥΣ ΓΟΝΕΙΣ (DT_2020-08-0_01)</h6>
              <p style="font-size:1vw" class="lead text-muted">Υπoγράφηκε χθες η Κοινή Υπουργική Απόφαση (ΚΥΑ) για την ολοκλήρωση της σύνδεσης των παιδιών που βρίσκονται σε δομές παιδικής προστασίας και των υποψηφίων γονέων. Η απόφαση προβλέπει, για πρώτη φορά, την ακριβή διαδικασία τοποθέτησης παιδιών σε ανάδοχες ή θετές οικογένειες μετά την πρόταση σύνδεσης από το Πληροφοριακό Σύστημα. Προστατεύει τα προσωπικά δεδομένα και τα δικαιώματα των παιδιών και ορίζει εξειδικευμένους κοινωνικούς λειτουργούς τόσο για το παιδί όσο και για τους υποψήφιους γονείς</p>
              <p><b><a href="#/" >Αρχείο</a></b></p>
            </tab-pane>

          </card>
        </tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";

export default {
  components: {
    BCarousel,
    BCarouselSlide,
    Tabs,
    TabPane
  }
};
</script>
<style>
</style>
