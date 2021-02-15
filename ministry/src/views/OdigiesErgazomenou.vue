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
                <button v-b-toggle="'collapse-2'" class="button list-group-item list-group-item-action ">Τηλεργασία</button>
                <b-collapse id="collapse-2">
                    <card>
                    <p>        Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom gay nor design age. Am weather to entered norland no in showing service. Nor repeated speaking shy appetite. Excited it hastily an pasture it observe. Snug hand how dare here too. 
</p>
                    </card>
                </b-collapse>


                <button v-b-toggle="'collapse-3'" class="button list-group-item list-group-item-action ">Αναστολή σύμβασης</button>
                <b-collapse id="collapse-3">
                    <card>
                    <p>               Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom gay nor design age. Am weather to entered norland no in showing service. Nor repeated speaking shy appetite. Excited it hastily an pasture it observe. Snug hand how dare here too. 

</p>
                    </card>
                </b-collapse>



                        <button v-b-toggle="'collapse-4'" class="button list-group-item list-group-item-action ">Άδεια ειδικού σκοπού</button>
                <b-collapse id="collapse-4">
                    <card>
                    <p>             Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom gay nor design age. Am weather to entered norland no in showing service. Nor repeated speaking shy appetite. Excited it hastily an pasture it observe. Snug hand how dare here too. 
.</p>
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
            text: 'Οδηγίες Εργαζόμενου',
            active: true
          }
        ]
      }
    }
  }
</script>