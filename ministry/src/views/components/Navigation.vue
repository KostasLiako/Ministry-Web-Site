<template>
    <section class="Navigation">
        <!-- Navbar default -->
        <base-nav v-for="menu in menus"
                  :key="menu.type"
                  :type="menu.type"
                  effect="light"
                  expand
                  title=""
                  class="mt-0"
                  :content-id="`navbar-${menu.type}`">
                  <div class="col-6 collapse-brand">
      <a href="/#/">
            <img  src="logo.png" >
     </a>
                  </div>
            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="./index.html">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu" :target="`navbar-${menu.type}`">

                    </close-button>
                </div>
            </div>
            <component :is="menu.menuComponent"></component>
        </base-nav>
    </section>

</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import Menu2 from "./Navigation/Menu2";


export default {
  components: {
    BaseNav,
    CloseButton,
    Menu2,
  },
  data() {
    return {
      menus: [
        { type: "Secondary", menuComponent: Menu2 },
      ]
    };
  }
};
</script>
<style>
</style>
