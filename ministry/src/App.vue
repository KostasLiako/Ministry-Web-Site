<template>
    <div id="app">
        <router-view name="header"></router-view>
        <main style="background-image: url('background.png');">
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view/>
            </fade-transition>
        </main>
        <router-view name="footer"></router-view>
    </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
import StarterFooter from './layout/starter/StarterFooter.vue';

export default {
  components: {
    FadeTransition,
    StarterFooter
  }
};
</script>


