<template>
  <div style="background-image: url('background3.png')">
    <footer class="footer has-cards">
      <div class="container">
        <div class="row row-grid align-items-center my-md"></div>
        <hr />
        <div class="row align-items-center justify-content-md-between">
          <div class="col-md-6">
                  

            <div class="copyright">
              &copy; {{ year }}
              <a target="_blank" rel="noopener"
                >Project EAM DI - University Of Athens</a
              >
            </div>
          </div>
      
          <div class="col-md-6">
            <ul class="nav nav-footer justify-content-end">
            
              <li>
                    <p>  <img src="small_logo.png"> </p>
                    <p class="text-black font-weight-light"><i class="fa fa-phone" aria-hidden="true"></i>213-1516649</p>
                    <p>Σταδίου 29, Αθήνα 105 59</p>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "starter-footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style>
</style>
