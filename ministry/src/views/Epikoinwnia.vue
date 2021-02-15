<template>
  <div class="container pt-lg-md">

    <div class="row justify-content-center">
      <div class="col-lg-15">
        <b-breadcrumb :items="items"></b-breadcrumb>
        <card type="secondary" shadow
              header-classes="bg-white pb-5"
              body-classes="px-lg-7 py-lg-10"
              class="border-0">

          <div style="text-align:center">
            <h1>Eπικοινωνία με το Υπουργείο</h1>
            <p>Μπορείτε να κλείσετε ενα ραντεβού <A href="/#/reservation"> εδώ </A> </p>

          </div>
          <div class="row">
            <div class="column">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.858924431941!2d23.728891015596897!3d37.98042150807347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd275a0f4fa3%3A0x80822910b9ca8294!2zzqXPgM6_z4XPgc6zzrXOr86_IM6Vz4HOs86xz4POr86xz4IsIM6azr_Ouc69z4nOvc65zrrOrs-CIM6Rz4PPhs6szrvOuc-DzrfPgiDOus6xzrkgzprOv865zr3Pic69zrnOus6uz4IgzpHOu867zrfOu861zrPOs8-FzrfPgiwgzqTOvM6uzrzOsSDOnM63z4TPgc-Ozr_PhSDOmi7Okc6bLs6f!5e0!3m2!1sen!2sgr!4v1610641649654!5m2!1sen!2sgr" width="500" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              <i class="fa fa-phone" style="font-size:16px"> 213-1516649</i>
              <p>Τα e-mail επικοινωνίας βρίσκονται <A href="/e-mail_armodiothtes_site.pdf" target="_blank"> εδώ </A> </p>


            </div>
            <div class="column"  @submit="onSubmit">
              <form action="/action_page.php">
                <label for="fname">Όνομα</label>
                <input type="text" id="fname" name="firstname" placeholder="Το όνομα σας..">
                <label for="lname">Επίθετο</label>
                <input type="text" id="lname" name="lastname" placeholder="Το επίθετο σας..">
                <label for="lname">Ε-mail</label>
                <input type="text" id="lname" name="lastname" placeholder="Το e-mail σας..">
                <label for="subject">Μήνυμα</label>
                <textarea id="subject" name="subject" placeholder="Γράψτε ένα μήνυμα.." style="height:170px"></textarea>
                <b-button  type="submit" variant="primary"
                >Υποβολη</b-button
                >      </form>
            </div>
          </div>

        </card>
      </div>
    </div>
  </div>

</template>


<style scoped>
* {
  box-sizing: border-box;
}
/* Style inputs */
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
}
input[type=submit]:hover {
  background-color: #45a049;
}
/* Style the container/contact section */
.container {
  border-radius: 5px;
  padding: 10px;
}
/* Create two columns that float next to eachother */
.column {
  float: left;
  width: 50%;
  margin-top: 6px;
  padding: 20px;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
</style>

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
          text: 'Προφίλ',
          active: true
        }
      ]
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      window.alert("Το μήνυμα σας θα απαντηθεί εντός των επόμενων ημερών!");
      window.location.href = '/';
    }
  }
}
</script>