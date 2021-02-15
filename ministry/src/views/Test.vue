<template>
  <div>
    <section class="section section-skew">
      <div class="container pt-lg-md">

        <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-6 py-lg-6"
            class="card-profile mt--100"
            no-body
        >
          <b-breadcrumb :items="items"></b-breadcrumb>
          <div class="list-group">
            <button v-b-toggle="'collapse-2'" class="button list-group-item list-group-item-action ">Τι είναι COVID-19 και τι SARS–CoV-2</button>
            <b-collapse id="collapse-2">
              <card>
                <p>        Η τρέχουσα επιδημία COVID-19 προκαλείται από τον κορωνοϊό SARS-CoV-2, που ανήκει στην οικογένεια
                  των κορωνοϊών (coronoviridae), μία μεγάλη οικογένεια RNA ιών.
                  Σύμφωνα με τον ΠΟΥ, ο όρος SARS-CoV-2 (Severe Acute Respiratory Syndrome Corona Virus 2) υποδεικνύει τον ιό, ενώ ο όρος COVID-19 (COrona Virus Disease-2019) υποδεικνύει τη νόσο που εκδηλώνεται
                  από τον ιό SARS-CoV-2.</p>
              </card>
            </b-collapse>


            <button v-b-toggle="'collapse-3'" class="button list-group-item list-group-item-action ">Ποιος είναι ο τρόπος μετάδοσης του ιού;</button>
            <b-collapse id="collapse-3">
              <card>
                <p>                Παρόλο που ο ιός προέρχεται από τα ζώα, μεταδίδεται από άνθρωπο σε άνθρωπο. Η μετάδοση θεωρείται ότι γίνεται κυρίως μέσω του αναπνευστικού με σταγονίδια από το φτέρνισμα, τον βήχα ή την εκπνοή.
                </p>
              </card>
            </b-collapse>



            <button v-b-toggle="'collapse-4'" class="button list-group-item list-group-item-action ">Πότε ένα περιστατικό της νόσου θεωρείται περισσότερο μεταδοτικό;</button>
            <b-collapse id="collapse-4">
              <card>
                <p>               Ένα περιστατικό θεωρείται περισσότερο μεταδοτικό όταν εμφανίζει συμπτώματα, αλλά θα μπορούσε
                  να είναι μεταδοτικό και στην ασυμπτωματική φάση. Δεν γνωρίζουμε το ποσοστό των ασυμπτωματικών
                  περιστατικών, ούτε τον ακριβή ρόλο που παίζουν στη μετάδοση του SARS-CoV-2, πιθανολογείται όμως
                  πως είναι μικρότερο από αυτό των συμπτωματικών περιπτώσεων της νόσου.</p>
              </card>
            </b-collapse>



            <button v-b-toggle="'collapse-5'" class="button list-group-item list-group-item-action ">Ποια είναι τα συμπτώματα της COVID-19 λοίμωξης;</button>
            <b-collapse id="collapse-5">
              <card>
                <p>                Tα κύρια συμπτώματα της νόσου περιλαμβάνουν: πυρετό, βήχα, πονόλαιμο, αρθραλγίες, μυαλγίες, καταβολή και δυσκολία στην αναπνοή.
                </p>
              </card>
            </b-collapse>



            <button v-b-toggle="'collapse-6'" class="button list-group-item list-group-item-action ">Πόσοι ασθενείς εμφανίζουν σοβαρή νόσο;</button>
            <b-collapse id="collapse-6">
              <card>
                <p>                Tα κύρια συμπτώματα της νόσου περιλαμβάνουν: πυρετό, βήχα, πονόλαιμο, αρθραλγίες, μυαλγίες, καταβολή και δυσκολία στην αναπνοή.
                </p>
              </card>
            </b-collapse>



            <button v-b-toggle="'collapse-7'" class="button list-group-item list-group-item-action ">Ποια άτομα κινδυνεύουν περισσότερο;</button>
            <b-collapse id="collapse-7">
              <card>
                <p>                Tα κύρια συμπτώματα της νόσου περιλαμβάνουν: πυρετό, βήχα, πονόλαιμο, αρθραλγίες, μυαλγίες, καταβολή και δυσκολία στην αναπνοή.
                </p>
              </card>
            </b-collapse>


            <button v-b-toggle="'collapse-8'" class="button list-group-item list-group-item-action ">Πότε πρέπει κάποιος να ελεγχθεί για COVID-19;</button>
            <b-collapse id="collapse-8">
              <card>
                <p>        Η τρέχουσα επιδημία COVID-19 προκαλείται από τον κορωνοϊό SARS-CoV-2, που ανήκει στην οικογένεια
                  των κορωνοϊών (coronoviridae), μία μεγάλη οικογένεια RNA ιών.
                  Σύμφωνα με τον ΠΟΥ, ο όρος SARS-CoV-2 (Severe Acute Respiratory Syndrome Corona Virus 2) υποδεικνύει τον ιό, ενώ ο όρος COVID-19 (COrona Virus Disease-2019) υποδεικνύει τη νόσο που εκδηλώνεται
                  από τον ιό SARS-CoV-2.</p>
              </card>
            </b-collapse>



            <button v-b-toggle="'collapse-9'" class="button list-group-item list-group-item-action ">Τι σημαίνει κρούσμα COVID-19</button>
            <b-collapse id="collapse-9">
              <card>
                <p>        Η τρέχουσα επιδημία COVID-19 προκαλείται από τον κορωνοϊό SARS-CoV-2, που ανήκει στην οικογένεια
                  των κορωνοϊών (coronoviridae), μία μεγάλη οικογένεια RNA ιών.
                  Σύμφωνα με τον ΠΟΥ, ο όρος SARS-CoV-2 (Severe Acute Respiratory Syndrome Corona Virus 2) υποδεικνύει τον ιό, ενώ ο όρος COVID-19 (COrona Virus Disease-2019) υποδεικνύει τη νόσο που εκδηλώνεται
                  από τον ιό SARS-CoV-2.</p>
              </card>
            </b-collapse>
          </div>
        </card>
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
          href: '#/OdigiesCovid'
        },
        {
          text: 'Οδηγίες Ε.Ο.Δ.Υ',
          active: true
        }
      ]
    }
  }
}
</script>
